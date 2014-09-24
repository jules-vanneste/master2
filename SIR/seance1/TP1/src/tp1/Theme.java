/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tp1;

/**
 *
 * @author jules
 */
public class Theme {
    private String name;
    
    public Theme(String name){
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
        Theme other = (Theme) o;
        return (this.name.compareTo(other.getName()) == 0);
    }
}
