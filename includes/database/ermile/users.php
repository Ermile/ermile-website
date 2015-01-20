<?php
namespace database\ermile;
class users 
{
	public $id              = array('null' =>'NO',  'show' =>'NO',  'label'=>'ID',            'type' => 'smallint@5',                                                                );
	public $user_type       = array('null' =>'YES', 'show' =>'YES', 'label'=>'Type',          'type' => 'enum@storeadmin,storeemployee,storesupplier,storecustomer,admin,user!user', );
	public $user_mobile     = array('null' =>'NO',  'show' =>'YES', 'label'=>'Mobile',        'type' => 'varchar@15',                                                                );
	public $user_pass       = array('null' =>'NO',  'show' =>'NO',  'label'=>'Password',      'type' => 'char@32',                                                                   );
	public $user_email      = array('null' =>'YES', 'show' =>'YES', 'label'=>'Email',         'type' => 'varchar@50',                                                                );
	public $user_gender     = array('null' =>'YES', 'show' =>'YES', 'label'=>'Gender',        'type' => 'enum@male,female',                                                          );
	public $user_nickname   = array('null' =>'YES', 'show' =>'YES', 'label'=>'Nickname',      'type' => 'varchar@50',                                                                );
	public $user_firstname  = array('null' =>'YES', 'show' =>'YES', 'label'=>'Firstname',     'type' => 'varchar@50',                                                                );
	public $user_lastname   = array('null' =>'YES', 'show' =>'YES', 'label'=>'Lastname',      'type' => 'varchar@50',                                                                );
	public $user_birthday   = array('null' =>'YES', 'show' =>'YES', 'label'=>'Birthday',      'type' => 'datetime@',                                                                 );
	public $user_status     = array('null' =>'YES', 'show' =>'YES', 'label'=>'Status',        'type' => 'enum@active,awaiting,deactive,removed,filter!awaiting',                     );
	public $user_credit     = array('null' =>'YES', 'show' =>'YES', 'label'=>'Credit',        'type' => 'enum@yes,no!no',                                                            );
	public $permission_id   = array('null' =>'YES', 'show' =>'YES', 'label'=>'Permission',    'type' => 'smallint@5',                                                                'foreign'=>'permissions@id!permission_title');
	public $user_createdate = array('null' =>'NO',  'show' =>'YES', 'label'=>'Createdate',    'type' => 'datetime@',                                                                 );
	public $date_modified   = array('null' =>'YES', 'show' =>'NO',  'label'=>'Date Modified', 'type' => 'timestamp@',                                                                );


	//------------------------------------------------------------------ id - primary key
	public function id() {$this->validate()->id();}

	//------------------------------------------------------------------ select button
	public function user_type() 
	{
		$this->form("select")->name("type")->type("select")->validate();
		$this->setChild();
	}

	//------------------------------------------------------------------ website
	public function user_mobile() 
	{
		$this->form()->type("tel")->name("mobile")->pl("Mobile")->pattern(".{10,}")->maxlength(17)->required();
	}

	//------------------------------------------------------------------ password
	public function user_pass() 
	{
		$this->form()->name("pass")->pl("Password")->type("password")->required()->maxlength(20)
			->pattern("^.{5,20}$")->title("between 5-20 character")->validate()->password();
	}

	//------------------------------------------------------------------ email
	public function user_email() 
	{
		$this->form("#email")->type("email")->required()->maxlength(50);
	}

	//------------------------------------------------------------------ radio button
	public function user_gender() 
	{
		$this->form("radio")->name("gender")->type("radio");
		$this->setChild();
	}
	public function user_nickname() 
	{
		$this->form("text")->name("nickname")->maxlength(50)->type('text');
	}
	public function user_firstname() 
	{
		$this->form("text")->name("firstname")->maxlength(50)->type('text');
	}
	public function user_lastname() 
	{
		$this->form("text")->name("lastname")->maxlength(50)->type('text');
	}
	public function user_birthday() 
	{
		$this->form("text")->name("birthday");
	}

	//------------------------------------------------------------------ select button
	public function user_status() 
	{
		$this->form("select")->name("status")->type("select")->validate();
		$this->setChild();
	}

	//------------------------------------------------------------------ radio button
	public function user_credit() 
	{
		$this->form("radio")->name("credit")->type("radio");
		$this->setChild();
	}

	//------------------------------------------------------------------ id - foreign key
	public function permission_id() 
	{
		$this->form("select")->name("permission")->min(0)->max(9999)->type("select")->validate()->id();
		$this->setChild();
	}
	public function user_createdate() 
	{
		$this->form("text")->name("createdate")->required();
	}
	public function date_modified() {}
}
?>