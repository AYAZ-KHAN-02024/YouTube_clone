import React from 'react';

function LoginPage() {
  return (
    <div className="p-2 mt-14 min-h-screen flex items-center justify-center">
      <div className="bg-blue-400 p-8 shadow-xl shadow-blue-950 rounded-lg  w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form id='login' name='forLogin'>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-green-900">Email</label>
            <input type="email" id="email" name="email" className="text-black mt-1 p-2 w-full border rounded-md" autoComplete='true' />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-green-900" >Password</label>
            <input type="password" id="password" name="password" className="text-black mt-1 p-2 w-full border rounded-md" autoComplete='true' />
          </div>
          <button type="submit" className="bg-indigo-500 text-black py-2 px-4 rounded-md hover:bg-indigo-600">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage
