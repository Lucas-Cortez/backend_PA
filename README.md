# Ordem dos afazeres

- Criação de usuário
  - POST localhost:8080/users
    ```json
        body = {
            "name": "Fulano",
            "email": "fulano@gmail.com",
            "password": "12345"
        }
    ```
- Criação de onibus
  - POST localhost:8080/bus
    ```json
        body = {
            "capacity": 20,
            "height": 4.5,
            "width": 30,
            "length": 3,
            "weight": 5000
        }
    ```
- Criação de pontos
  - POST localhost:8080/stop
    ```json
        body = {
            "name": "teste ponto",
            "latitude": 12.42532343,
            "longitude": -1.422623
        }
    ```
- Criação de linha
- Adicionar historico
