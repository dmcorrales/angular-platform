<?php
	class ConnDB{

	public function connect(){
		//Criterios de conexión
		$hostname='localhost';
		$username='root';
		$password='12345678';

		try {
			$conn = new PDO("mysql:host=$hostname;dbname=proyecto_db",$username,$password);
			return $conn;
		}
		catch(PDOException $e)
		{
			echo $e->getMessage();
		}
	}

	}
?>