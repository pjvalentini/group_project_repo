--
-- PostgreSQL database dump
--

-- Dumped from database version 10.1
-- Dumped by pg_dump version 10.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: favorited_holidays; Type: TABLE; Schema: public; Owner: mikaelaustin
--

CREATE TABLE favorited_holidays (
    id integer NOT NULL,
    user_id integer NOT NULL,
    holiday_id integer NOT NULL
);


ALTER TABLE favorited_holidays OWNER TO mikaelaustin;

--
-- Name: favorited_holidays_id_seq; Type: SEQUENCE; Schema: public; Owner: mikaelaustin
--

CREATE SEQUENCE favorited_holidays_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE favorited_holidays_id_seq OWNER TO mikaelaustin;

--
-- Name: favorited_holidays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mikaelaustin
--

ALTER SEQUENCE favorited_holidays_id_seq OWNED BY favorited_holidays.id;


--
-- Name: holidays; Type: TABLE; Schema: public; Owner: mikaelaustin
--

CREATE TABLE holidays (
    id integer NOT NULL,
    month character varying(255) NOT NULL,
    day character varying(255) NOT NULL,
    nation character varying(255) NOT NULL,
    info character varying(3000),
    link character varying(1000)
);


ALTER TABLE holidays OWNER TO mikaelaustin;

--
-- Name: holidays_id_seq; Type: SEQUENCE; Schema: public; Owner: mikaelaustin
--

CREATE SEQUENCE holidays_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE holidays_id_seq OWNER TO mikaelaustin;

--
-- Name: holidays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mikaelaustin
--

ALTER SEQUENCE holidays_id_seq OWNED BY holidays.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: mikaelaustin
--

CREATE TABLE users (
    id integer NOT NULL,
    lastname character varying(255) NOT NULL,
    firstname character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    favorite_holidays character varying(4000)
);


ALTER TABLE users OWNER TO mikaelaustin;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: mikaelaustin
--

CREATE SEQUENCE users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO mikaelaustin;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mikaelaustin
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- Name: favorited_holidays id; Type: DEFAULT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY favorited_holidays ALTER COLUMN id SET DEFAULT nextval('favorited_holidays_id_seq'::regclass);


--
-- Name: holidays id; Type: DEFAULT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY holidays ALTER COLUMN id SET DEFAULT nextval('holidays_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- Data for Name: favorited_holidays; Type: TABLE DATA; Schema: public; Owner: mikaelaustin
--

COPY favorited_holidays (id, user_id, holiday_id) FROM stdin;
\.


--
-- Data for Name: holidays; Type: TABLE DATA; Schema: public; Owner: mikaelaustin
--

COPY holidays (id, month, day, nation, info, link) FROM stdin;
1	January	1	USA	New Years Day	https://www.timeanddate.com/holidays/us/new-year-day
2	January	2	Haiti	Hero's Day/Ancestor's Day	https://ayearofholidays.wordpress.com/2012/01/02/ancestry-day-haiti/
3	January	4	Myanmar	Independence Day	http://yangonlife.com.mm/en/article/myanmar-independence-day-0
4	January	7	Egypt	Coptic Christmas Day	https://www.ask-aladdin.com/Egypt-Travel-Tips/coptic-christmas.html
5	January	15	USA	Martin Luther King Day	http://www.thekingcenter.org/meaning-king-holiday
6	February	1	Mauritius	Abolition of Slavery	http://www.tandfonline.com/doi/abs/10.1080/03086537608582463?journalCode=fich20
7	February	3	Mozambique	Heroes Day	http://aglobalworld.com/holidays-around-the-world/heroes-day-mozambique/
8	February	6	New Zealand	Waitangi Day	http://media.newzealand.com/en/events/celebrating-new-zealands-waitangi-day/
9	February	14	Indonesia	Maha Shivaratri	https://www.indoindians.com/maha-shivaratri-celebrating-lord-shiva/
10	February	17	Bhutan	Losar(New Year)	https://publicholidays.asia/bhutan/losar-new-year/
11	March	2	Holi	India	http://www.religionfacts.com/holi
12	March	17	Bali	Day of Silence	https://www.bali.com/nyepi-day-of-silence.html
13	March	21	Iran	Norooz (Persian New Year) 	http://www.iranchamber.com/culture/articles/norooz_iranian_new_year.php
14	March	26	Mali	Martyr's Day	http://aglobalworld.com/holidays-around-the-world/mali-martyrs-day/
15	March	29	Bolivia	Maundy Thursday	http://www.holidayscalendar.com/event/maundy-thursday/
16	April	4	China	Qing Ming Jie	https://www.chinahighlights.com/festivals/qingming-festival.htm
17	April	25	Australia	ANZAC Day	https://www.awm.gov.au/commemoration/anzac-day/traditions
18	April	25	Italy	Liberation Day	https://www.thelocal.it/20160425/what-is-italys-liberation-day-all-about-giorno-liberazione-partisans-nazi-fascist-milan-uprising-italian-republic-public-holiday
19	April	29	Japan	Showa Day	http://aglobalworld.com/holidays-around-the-world/japan-showa-day/
20	April	29	Thailand	Visakha Bucha	https://www.calendardate.com/th_visakha_bucha.htm
21	May	5	Mexico	Cinco de Mayo	http://www.history.com/topics/holidays/cinco-de-mayo
22	May	8	France	V Day	https://www.timeanddate.com/holidays/france/wwii-victory-day
23	May	28	Ethiopia	Derg Downfall Day	http://aglobalworld.com/holidays-around-the-world/ethiopia-derg-downfall-day/
24	May	28	Greece	Holy Spirit Monday	http://www.gometropolis.org/journey-to-pascha/monday-of-the-holy-spirit/
25	May	29	Bhutan	Buddha's Paranirvana	http://www.holidayscalendar.com/event/parinirvana-day/
26	June	10	Republic of the Congo	Reconciliation Day	https://anydayguide.com/calendar/2182
27	June	15	Djibouti	Eid al-Fitr	http://www.aljazeera.com/indepth/features/2016/07/eid-al-fitr-160701164352978.html
28	June	15	Singapore	Hari Raya Puasa	https://www.calendarlabs.com/holidays/singapore/hari-raya-puasa.php
29	June	26	Fiji	National Sports Day	https://anydayguide.com/calendar/1966
30	June	27	Sri Lanka	Poson Full Moon Poya Day	http://newsfirst.lk/english/2017/06/significance-poson-full-moon-poya-day/168523
31	July	1	Botswana	Sir Seretse Khama Day	https://anydayguide.com/calendar/2185
32	July	4	USA	US Independence Day	http://www.history.com/this-day-in-history/u-s-declares-independence
33	July	7	Ukraine	Kupala Night	http://destinations.com.ua/events/ivana-kupala-celebration-in-ukraine
34	July	14	France	Bastille Day	http://www.ajc.com/news/national/what-bastille-day-and-why-the-french-celebrate/TE8rjj74xefjn2hkxpGa0H/
35	July	30	Morocco	Feast of the Throne	http://aglobalworld.com/holidays-around-the-world/morocco-throne-feast/
36	August	1	Jamaica	Emancipation Day	http://www.digjamaica.com/emancipation_story
37	August	13	Samoa	Lotu	http://aglobalworld.com/holidays-around-the-world/samoa-lotuatamaiti/
38	August	22	Senegal	Tabaski	http://afrotourism.com/travelogue/tabaski-festival-senegal/
39	August	25	China	Spirit Festival	https://www.chinahighlights.com/festivals/hungry-ghost-festival.htm
40	August	30	Kazakhstan	Constitution Day	https://www.officeholidays.com/countries/kazakhstan/constitution_day.php
41	September	2	Burundi	Eid-El-Ahda	https://www.thoughtco.com/eid-al-adha-2004304
42	September	7	Mozambique	Victory Day	http://aglobalworld.com/holidays-around-the-world/mozambique-victory-day/
43	September	12	Algeria	Muharram	https://www.islamicity.org/6321/muharram-the-start-of-the-islamic-calendar/
44	September	21	Somalia	Ashura	http://www.bbc.com/news/world-middle-east-16047713
45	September	23	Chuseok Begins	Korea	http://english.visitkorea.or.kr/enu/ATR/SI_EN_3_6.jsp?cid=811650
46	October	3	Iraq	Iraqi Independence Day	https://www.officeholidays.com/countries/iraq/independence_day.php
47	October	18	Pakistan	Dussehra	https://www.dawn.com/news/1214946
48	October	19	India	Diwali / Deepavali	http://www.independent.co.uk/news/world/asia/diwali-2014-what-is-the-festival-of-lights-and-how-is-it-celebrated-9810212.html
49	October	27	Chile	Reformation Day	https://www.calendardate.com/cl_reformation_day.htm
50	October	30	China	Double Ninth Festival	https://www.travelchinaguide.com/essential/holidays/chongyang.htm
51	November	2	Brazil	All Souls' Day	https://www.officeholidays.com/religious/christian/all_souls.php
52	November	5	Panama	Colon Day	https://www.officeholidays.com/holidays/panama/colon-day
53	November	9	Mozambique	Iqbal Day	https://www.officeholidays.com/countries/pakistan/iqbal_day.php
54	November	21	Cameroon	The Prophet's Birthday	http://allafrica.com/stories/200903091077.html
55	November	22	Laos	That Luang Festival	https://www.laos-guide-999.com/that-luang-festival.html
56	December	1	Central African Republic	Republic Day	http://aglobalworld.com/holidays-around-the-world/central-african-republic-day/
57	December	7	Ghana	Farmers Day	https://mofa.gov.gh/site/?page_id=6722
58	December	13	Malta	Republic Day	https://publicholidays.com.mt/republic-day/
59	December	25	USA	Christmas	http://www.history.com/topics/christmas
60	December	26	United Kingdom	Boxing Day	https://www.thespruce.com/what-is-boxing-day-435060
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mikaelaustin
--

COPY users (id, lastname, firstname, username, email, password, favorite_holidays) FROM stdin;
\.


--
-- Name: favorited_holidays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mikaelaustin
--

SELECT pg_catalog.setval('favorited_holidays_id_seq', 1, false);


--
-- Name: holidays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mikaelaustin
--

SELECT pg_catalog.setval('holidays_id_seq', 60, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mikaelaustin
--

SELECT pg_catalog.setval('users_id_seq', 1, false);


--
-- Name: favorited_holidays favorited_holidays_pkey; Type: CONSTRAINT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY favorited_holidays
    ADD CONSTRAINT favorited_holidays_pkey PRIMARY KEY (id);


--
-- Name: holidays holidays_pkey; Type: CONSTRAINT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY holidays
    ADD CONSTRAINT holidays_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: mikaelaustin
--

ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
