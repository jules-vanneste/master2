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
public class Couple {
    private Theme theme1;
    private Theme theme2;
    
    public Couple(Theme t1, Theme t2){
        this.theme1 = t1;
        this.theme2 = t2;
    }

    public Theme getTheme1() {
        return theme1;
    }

    public void setTheme1(Theme theme) {
        this.theme1 = theme;
    }
    
    public Theme getTheme2() {
        return theme2;
    }

    public void setTheme2(Theme theme) {
        this.theme2 = theme;
    }
}
