Antes de ejecutar el proyecto, asegurese tener instalado Git, Nodejs, Angular y un servidor mysql 

Siga los pasos para ejecutar el proyecto
    1. Crear una carpeta vacia

    2. En la carpeta creada clonar el repositorio que se encuentra en la dirección url https://github.com/LauraAhumada571/RestAPI_CR. El comando para clonar el repsositorio es: 
    "git clone https://github.com/LauraAhumada571/RestAPI_CR"

    3. Ubicarse en la carpeta proylocation y desde la terminal de comandos ejecutar el comando "npm install"

    4. Ubicarse en la carpeta project y desde la terminal de comandos ejecutar el comando "npm install"

    5. Ejecutar el servdior para la conexión con la BD mysql y crear la base datos con el siguiente código

        CREATE DATABASE location;
        USE LOCATION;
        CREATE TABLE loc (
        id int primary key,
        name varchar(20),
        area_m2 int 
        );

        INSERT INTO LOC (id, name, area_m2) VALUES 
        ('1','Bogotá','1775'),
        ('2','Cali','564'), 
        ('3','Medellín','382'),  
        ('4','Pereira','702');

        SELECT * FROM LOC;

    6. Configurar puerto de mysql "3306", el host "localhost", user "root", password "", no poner contraseña. 

    Si el puerto de su equipo local es diferente al "3306", cambie el número del puerto en el archivo denominado dbConnection.js

    5. En una terminal de comandos ejecutar "ipconfig /all" y buscar la ip del equipo local donde se requiere ejecutar el proeyecto

    7. En el archivo denominado server.js cambiar "192.168.0.103" por la ip local de su equipo

    8. En una terminal ubicado en la carpeta proylocation, ejecutar el comando nodemon 

    9. En la terminal de comandos, ubicarse en la carpeta project y ejecutar el comando "node server.js"

    10. Por último ingresar a la dirección url http://localhost:4200/location
            

