CREATE TYPE public.app_role AS ENUM ('admin', 'staff');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;

CREATE POLICY "Users can read own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE TABLE public.kundli_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  gender TEXT NOT NULL CHECK (gender IN ('male','female','other')),
  birth_date DATE NOT NULL,
  birth_time TIME NOT NULL,
  birth_place TEXT NOT NULL CHECK (char_length(birth_place) BETWEEN 2 AND 160),
  email TEXT CHECK (email IS NULL OR char_length(email) <= 255),
  phone TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  generated_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewing','completed','archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.kundli_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.kundli_requests TO authenticated;
GRANT ALL ON public.kundli_requests TO service_role;
ALTER TABLE public.kundli_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit kundli requests" ON public.kundli_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can manage kundli requests" ON public.kundli_requests FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.matching_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  requester_name TEXT NOT NULL CHECK (char_length(requester_name) BETWEEN 2 AND 100),
  email TEXT CHECK (email IS NULL OR char_length(email) <= 255),
  phone TEXT CHECK (phone IS NULL OR char_length(phone) <= 20),
  boy_details JSONB NOT NULL,
  girl_details JSONB NOT NULL,
  generated_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','reviewing','completed','archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.matching_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.matching_requests TO authenticated;
GRANT ALL ON public.matching_requests TO service_role;
ALTER TABLE public.matching_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit matching requests" ON public.matching_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can manage matching requests" ON public.matching_requests FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.consultation_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email TEXT CHECK (email IS NULL OR char_length(email) <= 255),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  service TEXT NOT NULL CHECK (char_length(service) BETWEEN 2 AND 120),
  preferred_date DATE,
  preferred_time TEXT CHECK (preferred_time IS NULL OR char_length(preferred_time) <= 50),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 1500),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new','contacted','booked','completed','archived')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.consultation_requests TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.consultation_requests TO authenticated;
GRANT ALL ON public.consultation_requests TO service_role;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit consultation requests" ON public.consultation_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Admins can manage consultation requests" ON public.consultation_requests FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE INDEX kundli_requests_created_at_idx ON public.kundli_requests (created_at DESC);
CREATE INDEX matching_requests_created_at_idx ON public.matching_requests (created_at DESC);
CREATE INDEX consultation_requests_created_at_idx ON public.consultation_requests (created_at DESC);