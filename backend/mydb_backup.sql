--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

-- Started on 2025-07-02 21:05:33

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16774)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    username character varying(255) NOT NULL,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16779)
-- Name: order_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.order_items (
    order_id integer,
    product_id text,
    quantity integer,
    price bigint,
    id integer NOT NULL
);


ALTER TABLE public.order_items OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16784)
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.order_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.order_items_id_seq OWNER TO postgres;

--
-- TOC entry 4823 (class 0 OID 0)
-- Dependencies: 219
-- Name: order_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.order_items_id_seq OWNED BY public.order_items.id;


--
-- TOC entry 220 (class 1259 OID 16785)
-- Name: orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.orders (
    userid text,
    status text,
    total_price bigint,
    payment_method text,
    payment_status text,
    shipping_address text,
    id integer NOT NULL,
    note text
);


ALTER TABLE public.orders OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16790)
-- Name: orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.orders_id_seq OWNER TO postgres;

--
-- TOC entry 4824 (class 0 OID 0)
-- Dependencies: 221
-- Name: orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;


--
-- TOC entry 222 (class 1259 OID 16791)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id text NOT NULL,
    ten text,
    img text,
    gia bigint,
    mota text,
    soluong integer,
    type text
);


ALTER TABLE public.products OWNER TO postgres;

--
-- TOC entry 4654 (class 2604 OID 16796)
-- Name: order_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items ALTER COLUMN id SET DEFAULT nextval('public.order_items_id_seq'::regclass);


--
-- TOC entry 4655 (class 2604 OID 16797)
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);


--
-- TOC entry 4812 (class 0 OID 16774)
-- Dependencies: 217
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (username, password, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 4813 (class 0 OID 16779)
-- Dependencies: 218
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.order_items (order_id, product_id, quantity, price, id) FROM stdin;
\.


--
-- TOC entry 4815 (class 0 OID 16785)
-- Dependencies: 220
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.orders (userid, status, total_price, payment_method, payment_status, shipping_address, id, note) FROM stdin;
\.


--
-- TOC entry 4817 (class 0 OID 16791)
-- Dependencies: 222
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, ten, img, gia, mota, soluong, type) FROM stdin;
camera_ip_360_do_3mp_ezviz_c60p_dual	Camera IP 360 Độ 3MP Ezviz C60P Dual	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/336249/camera-ip-360-do-3mp-ezviz-c60p-dual-thumb-1-638792721107740090-600x600.jpg	1250000	Camera IP 360 Độ 3MP Ezviz C60P Dual là một camera an ninh thông minh tiên tiến với khả năng giám sát toàn diện, nổi bật với tính năng 'Dual' (kép), cho phép camera có thể có hai ống kính hoặc hai chế độ quan sát đồng thời	100	camera
camera_ip_360_do_3mp_ezviz_ty1	Camera IP 360 Độ 3MP EZVIZ TY1	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/329241/camera-ip-360-do-3mp-ezviz-ty1-thumb-1-638665876017214332-600x600.jpg	550000	Với độ phân giải 3 Megapixel, camera này cung cấp hình ảnh sắc nét và chi tiết hơn so với các mẫu 2MP, giúp người dùng dễ dàng quan sát và nhận diện đối tượng	100	camera
apple-macbook-air-2020-mgn63saa	Laptop MacBook Air 13 inch M1 8GB/256GB (MGN63SA/A)	https://cdn.tgdd.vn/Products/Images/44/231244/231244-600x600.jpg	17190000	Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn.	99	laptop
Laptop_Lenovo_IdeaPad_Slim_3_15IRH10_i5_13420H_16GB_512GB_Win11_83K1000HVN	Laptop Lenovo IdeaPad Slim 3 15IRH10 i5 13420H/16GB/512GB/Win11 (83K1000HVN)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334442/lenovo-ideapad-slim-3-15irh10-i5-83k1000hvn-638775478046964172-600x600.jpg	14990000	Laptop Lenovo IdeaPad Slim 3 15IAH8 R5 7520U mang đến hiệu năng ổn định cho mọi tác vụ hàng ngày.	100	laptop
Laptop_MSI_Gaming_Thin_15_B12UCX_i5_12450H_16GB_512GB_4GB_RTX2050_144Hz_Win11	Laptop MSI Gaming Thin 15 B12UCX i5 12450H/16GB/512GB/4GB RTX2050/144Hz/Win11	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/326124/msi-thin-15-b12ucx-i5-2046vn-140225-102530-055-600x600.jpg	15690000	Dùng Intel Core i5‑12450H và RTX 2050 4GB, chơi game phổ thông và xử lý đồ họa cơ bản tốt.	99	laptop
lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn	Laptop Lenovo Ideapad Slim 3 15AMN8 R5 7520U/16GB/512GB/Win11 (82XQ00J0VN)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325500/lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn-thumb-638754862828598408-600x600.jpg	12890000	Trong thị trường laptop học tập - văn phòng, chiếc laptop Lenovo Ideapad Slim 3 15AMN8 R5 7520U (82XQ00J0VN) nhanh chóng thu hút sự chú ý của người dùng bởi nhiều ưu điểm nổi bật. Chiếc laptop này hội tụ đầy đủ các yếu tố để trở thành người bạn đồng hành lý tưởng cho học sinh, sinh viên và nhân viên văn phòng, đáp ứng mọi nhu cầu học tập, làm việc và giải trí một cách hiệu quả.	99	laptop
camera_ip_360_do_3mp_imou_ranger_rc_gk2cp_3c0wr	Camera IP 360 Độ 3MP IMOU RANGER RC GK2CP-3C0WR	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/321919/camera-ip-360-do-3mp-imou-ranger-rc-gk2cp-3c0wr-thumb-1-638665865193351636-600x600.jpg	590000	Với độ phân giải 3 Megapixel, camera này mang lại hình ảnh sắc nét và chi tiết, giúp người dùng dễ dàng nhận diện và theo dõi đối tượng	99	camera
Camera_IP_360_Do_3MP_IMOU_TA32CP_L	Camera IP 360 Độ 3MP IMOU TA32CP-L	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/325086/camera-ip-360-do-3mp-imou-ta32cp-l-trang-thumb-1-638665866073272835-600x600.jpg	570000	Camera_IP_360_Do_3MP_IMOU_TA32CP_L là camera giám sát thông minh với độ phân giải 3MP, cho hình ảnh sắc nét và góc quay toàn cảnh 360 độ	100	camera
camera_ip_360_do_3mp_tiandy_tc_h332n	Camera IP 360 Độ 3MP TIANDY TC-H332N	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/319643/camera-ip-360-do-3mp-tiandy-tc-h332n-thumb-1-638665859057734172-600x600.jpg	465000	Camera IP 360 Độ 3MP TIANDY TC-H332N là một camera an ninh mạng cao cấp với khả năng giám sát xoay 360 độ, cho phép bao quát toàn bộ không gian mà không có điểm mù. Với độ phân giải 3 Megapixel, camera này cung cấp hình ảnh sắc nét và chi tiết, đảm bảo chất lượng giám sát vượt trội.	100	camera
camera_ip_360_do_3mp_tp_link_tapo_c210	Camera IP 360 Độ 3MP TP-Link Tapo C210	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/242566/camera-ip-360-do-3mp-tp-link-tapo-c210-thumb-1-638665769036697985-600x600.jpg	490000	Camera IP 360 Độ 3MP TP-Link Tapo C210 là một camera an ninh thông minh có khả năng xoay ngang và dọc linh hoạt, mang đến góc nhìn 360 độ để giám sát toàn diện không gian. Với độ phân giải 3 Megapixel (2K)	98	camera
camera_ip_360_do_4mp_ezviz_h6c_pro	Camera IP 360 Độ 4MP EZVIZ H6C Pro	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/323199/camera-ip-360-do-4mp-ezviz-h6c-pro-thumb-1-638665865629715445-600x600.jpg	690000	Camera IP 360 Độ 4MP EZVIZ H6C Pro là một camera an ninh thông minh vượt trội, được thiết kế để cung cấp khả năng giám sát toàn diện mọi góc độ trong không gian. Với độ phân giải 4 Megapixel (2K), camera này mang lại hình ảnh sắc nét và chi tiết hơn đáng kể so với các mẫu 2MP hoặc 3MP, giúp người dùng dễ dàng quan sát và nhận diện đối tượng một cách rõ ràng.	100	camera
camera_ip_360_do_5mp_365_selection_c2	Camera IP 360 Độ 5MP 365 Selection C2	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/329519/camera-ip-360-do-5mp-365-selection-c2-thumb-1-638665880164086375-600x600.jpg	650000	Camera IP 360 Độ 5MP 365 Selection C2 là một camera an ninh thông minh với khả năng xoay 360 độ, cho phép giám sát toàn diện mọi ngóc ngách trong không gian. Với độ phân giải cao lên đến 5 Megapixel (hay 2K+),	100	camera
camera_ip_360_do_8mp_ezviz_c6c	Camera IP 360 Độ 8MP Ezviz C6C	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/336248/camera-ip-360-do-8mp-ezviz-c6c-thumb-01-638792747095315494-600x600.jpg	1390000	Camera IP 360 Độ 8MP Ezviz C6C là một camera an ninh thông minh vượt trội với khả năng xoay 360 độ, cho phép giám sát toàn diện mọi góc độ trong không gian. Điểm nổi bật nhất của sản phẩm này là độ phân giải cực cao lên đến 8 Megapixel (hay 4K)	100	camera
dell-inspiron-15-3520-i5-n5i5057w1	Laptop Dell Inspiron 15 3520 i5 1235U/16GB/512GB/120Hz/OfficeHS/Win11 (N5I5057W1)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333886/dell-inspiron-15-3520-i5-n5i5057w1-638774726911323154-600x600.jpg	16490000	Laptop Dell Inspiron 15 3520 i5 1235U (N5I5057W1) là laptop tầm trung lý tưởng cho văn phòng, học sinh, sinh viên và người dùng cần thiết bị linh hoạt cho công việc và giải trí. Với vi xử lý Intel Core i5 thế hệ 12, máy mang đến hiệu suất ổn định, khả năng đa nhiệm mượt mà và thiết kế gọn nhẹ, phù hợp cho mọi nhu cầu sử dụng hàng ngày.	99	laptop
hp-15-fc0085au-r5-a6vv8pa	Laptop HP 15 fc0085AU R5 7430U/16GB/512GB/Win11 (A6VV8PA)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327098/hp-15-fc0085au-r5-a6vv8pa-170225-110652-878-600x600.jpg	13390000	Nổi bật và quá thân quen trong phân khúc laptop học tập - văn phòng giá rẻ, chiếc laptop HP 15 fc0085AU R5 7430U (A6VV8PA) với cấu hình ổn định, vận hành hiệu quả mọi tác vụ từ làm việc đến giải trí đa phương tiện. Máy hội tụ đầy đủ các yếu tố để trở thành bạn trợ thủ lý tưởng cho người dùng.	100	laptop
Laptop_Acer_Aspire_Go_AG15_31P_30M4_i3_N305_8GB_256GB_Win11_NX_KRPSV_004	Laptop Acer Aspire Go AG15 31P 30M4 i3 N305/8GB/256GB/Win11 (NX.KRPSV.004)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334997/acer-aspire-go-ag15-31p-30m4-i3-nxkrpsv004-thumb-638828183673538656-600x600.jpg	9990000	Acer Aspire Go 15 AG15‑31P là mẫu laptop 15,6″ Full HD IPS viền mỏng, trang bị Intel Core i3‑N305 cùng 8 GB RAM LPDDR5 và 256 GB SSD PCIe NVMe.	99	laptop
Laptop_Acer_Nitro_V_15_ANV15_41_R2UP_R5_6600H_16GB_512GB_4GB_RTX2050_165Hz_Win11	Laptop Acer Gaming Nitro V 15 ANV15 41 R2UP R5 6600H/16GB/512GB/4GB RTX2050/165Hz/Win11	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333430/acer-nitro-v-15-anv15-41-r2up-r5-nhqpgsv004-638774737367845195-600x600.jpg	17190000	Acer Nitro V 15 ANV15‑41 R2UP là laptop gaming tầm trung, trang bị Ryzen 5 6600H, RAM 16GB DDR5 và SSD 512GB NVMe.	98	laptop
Laptop_Asus_Vivobook_15_X1504VA_i3_1315U_8GB_512GB_Win11_NJ1634W	Laptop Asus Vivobook 15 X1504VA i3 1315U/8GB/512GB/Win11 (NJ1634W)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/334792/asus-vivobook-15-x1504va-i3-nj1634w-thumb-638760891054481940-600x600.jpg	10490000	Laptop Asus Vivobook 15 X1504VA sở hữu Intel Core i3‑1315U thế hệ 13 mạnh mẽ, kết hợp với 8GB RAM và 512GB SSD.	100	laptop
camera_ip_360_do_2mp_ezviz_c6n	Camera IP 360 Độ 2MP Ezviz C6N	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/285250/camera-ip-360-do-1080p-ezviz-c6n-trang-thumb-1-638665769248444436-600x600.jpg	470000	Với độ phân giải 2MP, camera cung cấp hình ảnh rõ nét, chi tiết. Camera này lý tưởng để theo dõi trong nhà, với các tính năng như phát hiện chuyển động	100	camera
camera-ip-360-do-3mp-imou-ta32cp-l-trang	Camera IP 360 Độ 3MP IMOU TA32CP-L	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/325086/camera-ip-360-do-3mp-imou-ta32cp-l-trang-thumb-1-638665866073272835-600x600.jpg	570000	Camera IP 360 Độ 3MP IMOU TA32CP-L là một sản phẩm công nghệ tiên tiến, được thiết kế đặc biệt để đáp ứng nhu cầu giám sát an ninh hiện đại. Với khả năng quay toàn bộ không gian lên đến 360 độ, camera này cho phép bạn giám sát mọi góc độ của ngôi nhà hoặc văn phòng một cách dễ dàng và chính xác.	100	camera
asus-vivobook-16-x1605va-i5-mb360w	Laptop Asus Vivobook 16 X1605VA i5 1335U/16GB/512GB/Win11 (MB360W)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/309375/asus-vivobook-16-x1605va-i5-mb360w-250225-022408-338-600x600.jpg	14490000	Laptop Asus Vivobook 16 X1605VA i5 1335U (MB360W) là khi sức mạnh gặp sang trọng được gói gọn trong một con laptop văn phòng với giá cả hợp lý đáp ứng cho bạn đầy đủ nhu cầu làm việc hay giải trí của người dùng từ chip Intel Gen 13 đến bộ nhớ RAM 16 GB.	100	laptop
camera-ip-360-do-2mp-tp-link-tapo-c200c	Camera IP 360 Độ 2MP TP-Link Tapo C200C	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/327948/camera-ip-360-do-2mp-tp-link-tapo-c200c-thumb-1-638665875350282813-600x600.jpg	450000	Bảo vệ ngôi nhà của bạn một cách toàn diện với camera IP 360 Độ 2MP TP-Link Tapo C200C. Với thiết kế nhỏ gọn, độ phân giải cao và góc nhìn rộng, chiếc camera này sẽ mang đến cho bạn hình ảnh sắc nét giúp bạn quan sát mọi ngóc ngách trong nhà một cách dễ dàng.	100	camera
camera-ip-ngoai-troi-3mp-tp-link-tapo-tc65	Camera IP Ngoài Trời 3MP TP-Link Tapo TC65	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/307989/camera-ip-ngoai-troi-3mp-tp-link-tapo-tc65-thumb-1-638778034687788350-600x600.jpg	790000	Camera IP Ngoài Trời 3MP TP-Link Tapo TC65 sở hữu kiểu dáng sang trọng, khả năng quan sát rộng và độ phân giải cao cho chất lượng hiển thị sắc nét. Ngoài ra, camera tích hợp khả năng chống nước và bụi đạt chuẩn IP66, phù hợp lắp đặt và sử dụng ở khu vực ngoài trời.	100	camera
camera_ip_360_do_2mp_tiandy_tc_h322n	Camera IP 360 Độ 2MP TIANDY TC-H322N	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/319642/camera-ip-360-do-2mp-tiandy-tc-h322n-thumb-1-638665858822811853-600x600.jpg	390000	Với độ phân giải 2 Megapixel, nó cung cấp hình ảnh rõ ràng và chi tiết, phù hợp cho việc giám sát cả ngày lẫn đêm	99	camera
camera_ip_360_do_3mp_botslab_c212	Camera IP 360 Độ 3MP BOTSLAB C212	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/319451/camera-ip-360-do-3mp-botslab-c212-thumb-1-638665854259627368-600x600.jpg	490000	Camera IP 360 Độ 3MP BOTSLAB C212 là một camera an ninh thông minh với khả năng xoay 360 độ, cho phép giám sát toàn diện mọi ngóc ngách trong không gian. Với độ phân giải 3 Megapixel, camera này cung cấp hình ảnh rõ nét và chi tiết, giúp người dùng dễ dàng quan sát và nhận diện đối tượng.	98	camera
Camera_IP_360_Do_2MP_TP_Link_Tapo_C200C	Camera IP 360 Độ 2MP TP-Link Tapo C200C	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/327948/camera-ip-360-do-2mp-tp-link-tapo-c200c-thumb-1-638665875350282813-600x600.jpg	450000	Camera_IP_360_Do_2MP_TP_Link_Tapo_C200C là mẫu camera thông minh của TP-Link, hỗ trợ quay quét 360 độ, độ phân giải 2MP, giúp giám sát an ninh hiệu quả cả ngày lẫn đêm. Tapo C200C còn tích hợp phát hiện chuyển động, đàm thoại 2 chiều và điều khiển từ xa qua ứng dụng.	100	camera
camera_ip_360_do_2mp_tp_link_tapo_tc70	Camera IP 360 Độ 2MP TP-Link Tapo TC70	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/235820/camera-ip-360-do-1080p-tp-link-tapo-tc70-trang-thumb-1-638665767170989592-600x600.jpg	450000	Với độ phân giải 2 Megapixel, camera cung cấp hình ảnh rõ nét và chi tiết, đảm bảo chất lượng giám sát tốt. Tapo TC70 được tích hợp nhiều tính năng tiện ích như phát hiện chuyển động, cảnh báo tức thì	100	camera
Laptop_Asus_Vivobook_Go_15_E1504FA_R5_7520U_16GB_512GB_Win11_NJ776W	ASUS Vivobook Go 15 E1504FA_R5_7520U_16GB_512GB_W11	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/311178/asus-vivobook-go-15-e1504fa-r5-nj776w-140225-100949-251-200x200.jpg	12390000	Laptop ASUS Vivobook Go 15 E1504FA R5 7520U là lựa chọn phù hợp cho người dùng cần một chiếc laptop học tập, làm việc với hiệu năng ổn định và thiết kế mỏng nhẹ.	99	laptop
Laptop_Dell_Inspiron_15_3520_i5_1235U_16GB_512GB_120Hz_OfficeHS_KYHD_Win11	Laptop Dell Inspiron 15 3520 i5 1235U/16GB/512GB/120Hz/OfficeHS/KYHD/Win11	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/321192/dell-inspiron-15-3520-i5-25p231-thumb-638754902669914908-600x600.jpg	16490000	Trang bị Intel i5‑1235U, RAM 16GB, SSD 512GB NVMe, đa nhiệm mượt, phù hợp học tập và làm việc.	100	laptop
Laptop_Dell_Inspiron_15_3520_i5_1235U_16GB_512GB_120Hz_OfficeHS_Win11_N5I5057W1	Laptop Dell Inspiron 15 3520 i5 1235U/16GB/512GB/120Hz/OfficeHS/Win11 (N5I5057W1)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333886/dell-inspiron-15-3520-i5-n5i5057w1-638774726911323154-200x200.jpg	16490000	Laptop Dell Inspiron 15 3520 i5 1235U với 16GB RAM và 512GB SSD là lựa chọn lý tưởng cho học sinh, sinh viên và nhân viên văn phòng.	100	laptop
Laptop_HP_15_fc0085AU_R5_7430U_16GB_512GB_Win11_A6VV8PA	Laptop HP 15 fc0085AU R5 7430U/16GB/512GB/Win11 (A6VV8PA)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327098/hp-15-fc0085au-r5-a6vv8pa-170225-110652-878-200x200.jpg	13390000	Laptop HP Pavilion 15 eg2058TU R5 7430U là mẫu laptop phù hợp cho nhu cầu học tập, làm việc và giải trí cơ bản với cấu hình ổn định.	100	laptop
Laptop_HP_15_fd0234TU_i5_1334U_16GB_512GB_Win11_9Q969PA	Laptop HP 15 fd0234TU i5 1334U/16GB/512GB/Win11 (9Q969PA)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/323920/hp-15-fd0234tu-i5-9q969pa-170225-105831-192-200x200.jpg	15890000	Màn hình 15,6″ Full HD viền mỏng, chống chói, độ sáng 250 nit và độ phủ màu ~62%, cho hình ảnh sắc nét và trung thực.	100	laptop
Laptop_Lenovo_IdeaPad_Slim_3_15AMN8_R5_7520U_16GB_512GB_Win11	Laptop Lenovo Ideapad Slim 3 15AMN8 R5 7520U/16GB/512GB/Win11	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325500/lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn-thumb-638754862828598408-600x600.jpg	12490000	Lenovo IdeaPad Slim 3 (15AMN8) với Ryzen 5 7520U, 16GB RAM LPDDR5 và SSD 512GB NVMe, chạy Windows 11 Home.	100	laptop
Laptop_MacBook_Air_13_inch_M4_16GB_256GB	Laptop MacBook Air 13 inch M4 16GB/256GB	https://cdn.tgdd.vn/Products/Images/44/335362/macbook-air-13-inch-m4-xanh-da-troi-600x600.jpg	27990000	MacBook Air M2 2022 với thiết kế mỏng nhẹ, hiệu năng mạnh mẽ và thời lượng pin dài, là lựa chọn tuyệt vời cho người dùng.	100	laptop
camera_ip_360_do_3mp_365_selection_c1	Camera IP 360 Độ 3MP 365 Selection C1	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/329518/camera-ip-360-do-3mp-365-selection-c1-thumb-1-638665879913127844-600x600.jpg	360000	Camera IP 360 Độ 3MP 365 Selection C1 là một camera an ninh thông minh với khả năng xoay 360 độ, cho phép giám sát toàn diện không gian mà không bỏ sót góc khuất nào. Với độ phân giải 3 Megapixel, camera này cung cấp hình ảnh sắc nét và chi tiết, giúp người dùng dễ dàng quan sát và nhận diện đối tượng.	98	camera
\.


--
-- TOC entry 4825 (class 0 OID 0)
-- Dependencies: 219
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_items_id_seq', 37, true);


--
-- TOC entry 4826 (class 0 OID 0)
-- Dependencies: 221
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.orders_id_seq', 17, true);


--
-- TOC entry 4657 (class 2606 OID 16799)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (username);


--
-- TOC entry 4659 (class 2606 OID 16801)
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- TOC entry 4661 (class 2606 OID 16803)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);


--
-- TOC entry 4663 (class 2606 OID 16805)
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- TOC entry 4664 (class 2606 OID 16806)
-- Name: order_items order_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_id FOREIGN KEY (order_id) REFERENCES public.orders(id) NOT VALID;


--
-- TOC entry 4665 (class 2606 OID 16811)
-- Name: order_items product_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- TOC entry 4666 (class 2606 OID 16816)
-- Name: orders user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT user_id FOREIGN KEY (userid) REFERENCES public."Users"(username);


--
-- TOC entry 4827 (class 0 OID 0)
-- Dependencies: 4666
-- Name: CONSTRAINT user_id ON orders; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON CONSTRAINT user_id ON public.orders IS 'sdd';


-- Completed on 2025-07-02 21:05:33

--
-- PostgreSQL database dump complete
--

