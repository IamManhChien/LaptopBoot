PGDMP      "                }            postgres    17.5    17.5     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Vietnamese_Vietnam.1252';
    DROP DATABASE postgres;
                     postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                        postgres    false    4800            �            1259    16501    Users    TABLE     �   CREATE TABLE public."Users" (
    username character varying(255) NOT NULL,
    password character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public."Users";
       public         heap r       postgres    false            �            1259    16470    products    TABLE     �   CREATE TABLE public.products (
    id text NOT NULL,
    ten text,
    img text,
    gia character varying,
    mota text,
    soluong integer,
    type text
);
    DROP TABLE public.products;
       public         heap r       postgres    false            �          0    16501    Users 
   TABLE DATA           O   COPY public."Users" (username, password, "createdAt", "updatedAt") FROM stdin;
    public               postgres    false    218          �          0    16470    products 
   TABLE DATA           J   COPY public.products (id, ten, img, gia, mota, soluong, type) FROM stdin;
    public               postgres    false    217           '           2606    16507    Users Users_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (username);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public                 postgres    false    218            %           2606    16476    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public                 postgres    false    217            �      x�}�Ao�0���;x[�گ�ENE#:���] E�֢D�����LMv~��P�&�MJ���$-o%��[��1���W��ߎ�U����a�(-�����@���h��J��C8�B��OB�KF8�`g�ot��83�ױN����;��+�]#���q�H��DG��q��ƣ��x���{^軙� s ����q��V��>NL�5?}Y]��_�z�Fa�{�f��	�|Y��l�m�g���x�0�Xs�>�&�B?��e�      �    
  x���]ogǯçx.w%�=��I��m��!��ڛ��x��`��]�V�@����
�
R��A�J�P/���&�?��3vis��3Ϝ���?/�����~���f+w5[���XJ�g�ꝕ��$���J����-����MXB3�FM�׮�,M��� �4񗍫���_W�4Mz�ռ���W���~���;m���i����V7�ϼ�W[�v�W3͚�6��Us?j��[��[
>L�Q�QlU��?�o���fV͆ZUU��ǙZ/:�g��Do<<�D8G�h��%��Fm�v�Ç��������'ڣ��K�.�o���q*�8������H������x�˃ѱ�ƃ���	^�����b���b�^�oǃ��c�BD~FO����P���;O��!6�f�a���+�6��C �Go����gl$b=J[�֊pr����>��Ml77�AkW�+(�p�s�VHxIُ=L�4Q:At��n+�����*��[�ĻѾ�Ɩ��R>�R���bKW�,&uݩz�a:���~�)�b�m[N�2���;�Q�ƴ$3W�ʘ��8�5�c����J�ѱ�4=��>�"ʣ�]�	U��O�>��{*��qx$��p�<?F� {.��E �#��	0�8jW(����X����[��,{=�l�O,{��F�)�9H�%�37��qJ�~�G�myv��St��x�O`�,jK��5�W�be�⦤]�y.D�������4�U8�r�X�c/�Ġy�l[�A�1�@V]t!�Yh��z�x<8��_ɧm��K��O�
*��KN	��o��#S��~IKf�A��`"�Q����[��8��x��2EP�6��0g�E��g��v�q9T|Rb�R��X���
&H�'	�D��WΏ�dE�<3��?:É��w%��$鴔��8��AW�U]U�vd=ם��׻JɡtI�o�Є���[�u�k��q�Yk�Rܔ�s�nh��G9Eի�\�"3KV��d)�����J�s
� �z2����k�:��v����-��Ά'�&r�H�w2�Ewƃ�9���9�"��s�dێ�f�s����>	"�MP)Ê�=b&ǃ7R���"I��.Iu��,ON&�q�^?�����$���+i�J~�����⚽*��I��5���`ʂ�X�ިk�i���n,�˩ZyJ���lQ�$��i�b��B��.�x>��!"5�6+�0��T��������S�X���"�Ja�8��\<Ԋe@�a����+��%R�x"��BDUӤr������,��	F썎�\� �����d�H�B<�2����_��\��
Vb,_(tN�pD�Z��S�� ^�R�F��!Դ	��Y��|H��ؒT�c7@���>��%�l���6d8;]�Ԙ/(vV��2���S$�c�I���0m�����H�/�|���> r2���/�]e>U��r��YR?Q|�ߓt&Y��+كB9T���u��7�A��E�%�7I�� m�2�B۠��N�m��ͤ������p�3Jq'�S�&#�~���I�{%��[��D�$@a�h�bX�th�"+�T�~G�d�O���\)4K�J����N��k�j_ܺx�k�'�ަ�N��.��oC�q�%`��nh	�5�L��~���+��eX�SS�.r7�ć�,�(>�۱BVd)y����OTQ���.OJa��{�V��8�!�+�<ñ�͚�II��]�̒�j�mщRVa�5�$����S,OP��a�-��2���#W& hY�W"�\O�R�lu9�����=�4w!��RCy���Z�	������fJ�R\��w�ievm�"(4o�mK�MC=oѴww���e���jé-�I��<y�4նtũ�M�����	WT����|;C˟���Z�Y�&�oB�d,�%B)c<5@����]4�Ȥ3-��e�x_�1�'��ΈҔR8�8���bM�sV�@K	J��$�)'٪� 2q���qR�lp�p��2.�6�$�)9���E��ߤ�/��y7��ӊ�~��-7q��^'Av�ȡ�:��۪��ڏ&�}�O�u����'�7776�0$�<��/U�����8�,U�]��<�RZ�c�x�j84+�W����O&;Y��0�.�2�@ޅ�Tr
�JO�k�� �q@M0*H|9��#,���`Z���Mk�hvתb�l ����nj�t�J��ߔ?�����.z���h!�ҭ���Ƹx?<�3fȽ˧0��KW/Ut����a�����0uǮ��@5�QG'C��t�;���v�s���~�DŜdv�]1zpՙ�������!��l��\��3/Uz<����1Q>ڛ���Թ�g����k�T΅���~��F���Ԑ瓃�a~IoqD�_d:4�Q��g� n�	ץ�Bs2�#Z]��)��ә�z��X�m77�>�۫b�3��������5�ZC_B�r#��l���9s=������xT*���L��N���x{D��p �\�
CO�<���#"�.�����b�Xj��+��T�\��~��     