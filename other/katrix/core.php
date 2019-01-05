<?php
session_start();
require_once("classes/class.db.php");
require_once("classes/user.class.inc.php");

class Core{

	public function __construct(){
		$this->_connDB = new ConnDB();
		$this->_connectDB = $this->_connDB->connect();
	}

	public function userDataBase(){
		return new User($this->_connectDB);
	}

}




?>