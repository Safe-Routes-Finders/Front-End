import React from 'react'

export default function usersForm() {
    return (
        <div>
            <form onSubmit={onSubmit}>
            
            <input 
                type="text"
                name="username"
                value={newUser.name}
                placeholder="User Name"
                onChange={handleChange}
            />
        
            {/* <div>
            <input 
                type="text"
                name="password"
                value={newUser.password}
                placeholder="Password"
                onChange={handleChange}
            />
            </div> */}
          
            <input 
                type="text"
                name="primaryemail"
                value={newUser.primaryemail}
                placeholder="Email"
                onChange={handleChange}
            />
            <button onClick={handleChange}>{props.editingUser ? "Submit Edit" : "Add User"}</button>
        </form> 
        </div>
    )
}
