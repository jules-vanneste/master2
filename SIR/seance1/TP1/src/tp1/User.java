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
public class User {
    private String name;
    
    public User(String name){
        this.name = name;
    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    @Override
    public boolean equals(Object o){
        if (this.getClass() != o.getClass()) {
            return false;
        }
        User other = (User) o;
        return (this.name.compareTo(other.getName()) == 0);
    }
}
