/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tp1;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jules
 */
public class DictionnaireUser {
    private List<User> users;
    
    public DictionnaireUser(){
        this.users = new ArrayList();
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
    
    public void addUser(User u){
        this.users.add(u);
    }
    
    public void addUserIfNonExist(User u){
        boolean b = false;
        for(User u1 : this.users){
            if(u.getName().compareTo(u1.getName())==0){
                b = true;
            }
        }
        if(!b){
            this.users.add(u);
        }
    }
}
