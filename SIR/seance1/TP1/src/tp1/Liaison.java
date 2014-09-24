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
public class Liaison {
    private User user;
    private Theme theme;
    private int cpt;
    
    public Liaison(User u, Theme t, int cpt){
        this.user = u;
        this.theme = t;
        this.cpt = cpt;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Theme getTheme() {
        return theme;
    }

    public void setTheme(Theme theme) {
        this.theme = theme;
    }

    public int getCpt() {
        return cpt;
    }

    public void setCpt(int cpt) {
        this.cpt = cpt;
    }
    
    public void incrementeCpt() {
        this.cpt = this.cpt + 1;
    }
}
