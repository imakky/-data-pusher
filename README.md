# for project setup
git clone
npm i 

# I am using this for creating tables 

-- Table: public.Accounts

-- DROP TABLE IF EXISTS public."Accounts";

CREATE TABLE IF NOT EXISTS public."Accounts"
(
    id integer NOT NULL DEFAULT nextval('"Accounts_id_seq"'::regclass),
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    account_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    app_secret character varying(255) COLLATE pg_catalog."default",
    website character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Accounts_pkey" PRIMARY KEY (id),
    CONSTRAINT "Accounts_email_key" UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Accounts"
    OWNER to postgres;


-- Table: public.Destinations

-- DROP TABLE IF EXISTS public."Destinations";

CREATE TABLE IF NOT EXISTS public."Destinations"
(
    id integer NOT NULL DEFAULT nextval('"Destinations_id_seq"'::regclass),
    account_id integer NOT NULL,
    url character varying(255) COLLATE pg_catalog."default" NOT NULL,
    http_method "enum_Destinations_http_method" NOT NULL,
    headers jsonb NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Destinations_pkey" PRIMARY KEY (id),
    CONSTRAINT "Destinations_account_id_fkey" FOREIGN KEY (account_id)
        REFERENCES public."Accounts" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Destinations"
    OWNER to postgres;
-- Index: destinations_account_id_url_http_method

-- DROP INDEX IF EXISTS public.destinations_account_id_url_http_method;

CREATE UNIQUE INDEX IF NOT EXISTS destinations_account_id_url_http_method
    ON public."Destinations" USING btree
    (account_id ASC NULLS LAST, url COLLATE pg_catalog."default" ASC NULLS LAST, http_method ASC NULLS LAST)
    TABLESPACE pg_default;


# After Complete the setup hti this cmd

npm Start


# Got to local browser and hit this URL

http://localhost:3000/api-docs/#/

# looking like this

![image](https://github.com/user-attachments/assets/1480071c-1e85-42f3-8dbf-f9a2e1037d6f)
  


