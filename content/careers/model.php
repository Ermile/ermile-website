<?php
namespace content\careers;


class model
{
	public static $url = root.'public_html/files/careers';


	public static function post()
	{
		$name   = \dash\request::post("name");
		$number = \dash\request::post("number");
		$type   = \dash\request::post("type");

		if($type != 'php' && $type != 'js' && $type != 'graphic')
		{
			\dash\notif::error(T_("Type not found"));
			return false;
		}
		if(!$number)
		{
			\dash\notif::error(T_("Contact number not set"));
			return false;
		}
		if(!is_numeric($number))
		{
			\dash\notif::error(T_("Contact number must be number"));
			return false;
		}
		if(strlen($number) != 11)
		{
			\dash\notif::error(T_("Contact number must 11 character"));
			return false;
		}

		if(strlen($name) > 30)
		{
			$name = substr($name, 0, 30);
		}

		if(!\dash\request::files("file"))
		{
			\dash\notif::error(T_("You must upload a CV file"));
			return false;
		}

		if(!\dash\file::exists(root. 'public_html/files'))
		{
			\dash\file::makeDir(root. 'public_html/files');
		}

		$url = self::$url;
		if(!\dash\file::exists($url))
		{
			\dash\file::makeDir($url);
		}
		$url = $url. '/';
		$url .= $type. '_'. $number. '_';
		$url .= \dash\utility\filter::slug($name). '_';
		$url .= '['.\dash\utility\filter::slug(\dash\request::files("file")['name']).']';

		$path = \dash\file::getName(\dash\request::files("file")['name']);
		$path = explode('.', $path);
		$path = end($path);

		$extentionsDisallow = ['php', 'php5', 'htaccess', 'exe', 'bat', 'bin'];
		// if(in_array($path, $extentionsDisallow))
		if($path !== 'pdf')
		{
			\dash\notif::error(T_("Can not upload this file! only PDF:/"));
			return false;
		}

		$url = str_replace('-'. $path, '', $url);
		$url .= '.'. $path;

		// var_dump($url, \dash\request::files("file")['tmp_name']);exit();
		if(isset(\dash\request::files("file")['tmp_name']))
		{
			if(@move_uploaded_file(\dash\request::files("file")['tmp_name'], $url))
			{
				\dash\notif::ok(T_("Thank you. Wait for our call"));
			}
			else
			{
				\dash\notif::warn(T_("We could not upload CV file"));
			}
		}
	}
}
?>