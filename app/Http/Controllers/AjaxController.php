<?php
namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AjaxController extends Controller {


    public function index()
    {   
        $id = auth()->user()->id;
        // $user = DB::table('users')->where('id', $id)->first();
        return $id;
    }


   public function post(){

    $id =auth()->user()->id;
      $response = array(
          'status' => 'auth()->user()->id',
          'name' => 'auth()->user()->name',
          'designation' => 'auth()->user()->designation',
          'picture' => 'auth()->user()->picture'
      );
      return $id;
      return response()->json($response); 
   }
}