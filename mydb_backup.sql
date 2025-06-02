--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

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
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id text NOT NULL,
    ten text,
    img text,
    gia character varying,
    mota text,
    soluong integer,
    type text
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, ten, img, gia, mota, soluong, type) FROM stdin;
apple-macbook-air-2020-mgn63saa	Laptop MacBook Air 13 inch M1 8GB/256GB (MGN63SA/A)	https://cdn.tgdd.vn/Products/Images/44/231244/231244-600x600.jpg	17.190.000đ	Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phục được các tính năng văn phòng lẫn đồ hoạ mà bạn mong muốn, thời lượng pin dài, thiết kế mỏng nhẹ sẽ đáp ứng tốt các nhu cầu làm việc của bạn.	100	laptop
asus-vivobook-16-x1605va-i5-mb360w	Laptop Asus Vivobook 16 X1605VA i5 1335U/16GB/512GB/Win11 (MB360W)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/309375/asus-vivobook-16-x1605va-i5-mb360w-250225-022408-338-600x600.jpg	14.490.000đ	Laptop Asus Vivobook 16 X1605VA i5 1335U (MB360W) là khi sức mạnh gặp sang trọng được gói gọn trong một con laptop văn phòng với giá cả hợp lý đáp ứng cho bạn đầy đủ nhu cầu làm việc hay giải trí của người dùng từ chip Intel Gen 13 đến bộ nhớ RAM 16 GB.	100	laptop
dell-inspiron-15-3520-i5-n5i5057w1	Laptop Dell Inspiron 15 3520 i5 1235U/16GB/512GB/120Hz/OfficeHS/Win11 (N5I5057W1)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333886/dell-inspiron-15-3520-i5-n5i5057w1-638774726911323154-600x600.jpg	16.490.000đ	Laptop Dell Inspiron 15 3520 i5 1235U (N5I5057W1) là laptop tầm trung lý tưởng cho văn phòng, học sinh, sinh viên và người dùng cần thiết bị linh hoạt cho công việc và giải trí. Với vi xử lý Intel Core i5 thế hệ 12, máy mang đến hiệu suất ổn định, khả năng đa nhiệm mượt mà và thiết kế gọn nhẹ, phù hợp cho mọi nhu cầu sử dụng hàng ngày.	100	laptop
hp-15-fc0085au-r5-a6vv8pa	Laptop HP 15 fc0085AU R5 7430U/16GB/512GB/Win11 (A6VV8PA)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/327098/hp-15-fc0085au-r5-a6vv8pa-170225-110652-878-600x600.jpg	13.390.000đ	Nổi bật và quá thân quen trong phân khúc laptop học tập - văn phòng giá rẻ, chiếc laptop HP 15 fc0085AU R5 7430U (A6VV8PA) với cấu hình ổn định, vận hành hiệu quả mọi tác vụ từ làm việc đến giải trí đa phương tiện. Máy hội tụ đầy đủ các yếu tố để trở thành bạn trợ thủ lý tưởng cho người dùng.	100	laptop
lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn	Laptop Lenovo Ideapad Slim 3 15AMN8 R5 7520U/16GB/512GB/Win11 (82XQ00J0VN)	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/325500/lenovo-ideapad-slim-3-15amn8-r5-82xq00j0vn-thumb-638754862828598408-600x600.jpg	12.890.000đ	Trong thị trường laptop học tập - văn phòng, chiếc laptop Lenovo Ideapad Slim 3 15AMN8 R5 7520U (82XQ00J0VN) nhanh chóng thu hút sự chú ý của người dùng bởi nhiều ưu điểm nổi bật. Chiếc laptop này hội tụ đầy đủ các yếu tố để trở thành người bạn đồng hành lý tưởng cho học sinh, sinh viên và nhân viên văn phòng, đáp ứng mọi nhu cầu học tập, làm việc và giải trí một cách hiệu quả.	100	laptop
camera-ip-360-do-2mp-tp-link-tapo-c200c	Camera IP 360 Độ 2MP TP-Link Tapo C200C	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/327948/camera-ip-360-do-2mp-tp-link-tapo-c200c-thumb-1-638665875350282813-600x600.jpg	450.000đ	Bảo vệ ngôi nhà của bạn một cách toàn diện với camera IP 360 Độ 2MP TP-Link Tapo C200C. Với thiết kế nhỏ gọn, độ phân giải cao và góc nhìn rộng, chiếc camera này sẽ mang đến cho bạn hình ảnh sắc nét giúp bạn quan sát mọi ngóc ngách trong nhà một cách dễ dàng.	100	camera
camera-ip-360-do-3mp-imou-ta32cp-l-trang	Camera IP 360 Độ 3MP IMOU TA32CP-L	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/325086/camera-ip-360-do-3mp-imou-ta32cp-l-trang-thumb-1-638665866073272835-600x600.jpg	570.000đ	Camera IP 360 Độ 3MP IMOU TA32CP-L là một sản phẩm công nghệ tiên tiến, được thiết kế đặc biệt để đáp ứng nhu cầu giám sát an ninh hiện đại. Với khả năng quay toàn bộ không gian lên đến 360 độ, camera này cho phép bạn giám sát mọi góc độ của ngôi nhà hoặc văn phòng một cách dễ dàng và chính xác.	100	camera
camera-ip-ngoai-troi-3mp-tp-link-tapo-tc65	Camera IP Ngoài Trời 3MP TP-Link Tapo TC65	https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4728/307989/camera-ip-ngoai-troi-3mp-tp-link-tapo-tc65-thumb-1-638778034687788350-600x600.jpg	790.000đ	Camera IP Ngoài Trời 3MP TP-Link Tapo TC65 sở hữu kiểu dáng sang trọng, khả năng quan sát rộng và độ phân giải cao cho chất lượng hiển thị sắc nét. Ngoài ra, camera tích hợp khả năng chống nước và bụi đạt chuẩn IP66, phù hợp lắp đặt và sử dụng ở khu vực ngoài trời.	100	camera
\.


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

