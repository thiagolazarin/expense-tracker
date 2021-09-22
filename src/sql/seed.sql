USE tracker ;
insert into transasao (tipo_transasao, tran_data, tran_valor, cat_id) values (1, now(), 10, 1);

insert into categoria (cat_nome) values ("alimentação");

insert into tipo_transasao (tipo_tran_nome) values ("despesa");
insert into tipo_transasao (tipo_tran_nome) values ("receita");