/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp1;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jules
 */
public class TP1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String infos[];
        String fichier = "log.txt";
        List<User> users = new ArrayList();
        List<Theme> themes = new ArrayList();
        themes.add(new Theme("Photo-video"));
        themes.add(new Theme("informatique"));
        themes.add(new Theme("jardinage"));
        themes.add(new Theme("sport"));
        themes.add(new Theme("bricolage"));
        
        try {
            InputStream ips = new FileInputStream(fichier);
            InputStreamReader ipsr = new InputStreamReader(ips);
            BufferedReader br = new BufferedReader(ipsr);
            String ligne;
            while ((ligne = br.readLine()) != null) {
                System.out.println(ligne);
                infos = ligne.split(";");
                User u = null;
                for(User u1 : users){
                    if(u.getName().compareTo(infos[1]) == 0){
                        u = u1; 
                    }
                }
                if (u == null){
                    u = new User(infos[1]);
                    users.add(u);
                }
                for(Theme t1 : themes){
                    Theme t = new Theme(infos[2]);
                }
            }
            br.close();
        } catch (IOException e) {
            System.out.println(e.toString());
        }
    }

}
