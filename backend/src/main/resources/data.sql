
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('João Silva', '123456', 'joao@email.com', 'TI');
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('Maria Santos', '234567', 'maria.santos@email.com', 'RH');
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('Pedro Oliveira', '345678', 'pedro.oliveira@email.com', 'Financeiro');
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('Ana Costa', '456789', 'ana.costa@email.com', 'Marketing');
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('Lucas Ferreira', '567890', 'lucas.ferreira@email.com', 'TI');
INSERT INTO tb_candidate (name, registration, email, sector) VALUES ('Juliana Lima', '678901', 'juliana.lima@email.com', 'Comercial');


INSERT INTO tb_admin(email,password) VALUES ('felipe@gmail.com','$2a$10$5x5K4Vw15Gi4U9Z6wyvv6.XLsPTiElsfKCOLe/s4ubSrOLLCEXDGa');
INSERT INTO tb_role(authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_admin_roles(admin_id, role_id) VALUES (1,1);