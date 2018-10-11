<?php
class User{

	public function __construct($dbConn){
		$this->_connectDB = $dbConn; 
	}

	public function validateUser($pEmail,$pPassword){
		$query = "SELECT * from usuarios WHERE correo_usuario = ? AND password_usuario = ?";
		$stmt = $this->_connectDB->prepare($query);
		$stmt->bindParam(1,$pEmail);
		$stmt->bindParam(2,$pPassword);
		$stmt->execute();
		$result = $stmt->fetch();
		if($result != NULL){
			$_SESSION['serverSession'] = array('cod_usuario' => $result['cod_usuario']);
		}
	}

}

?>