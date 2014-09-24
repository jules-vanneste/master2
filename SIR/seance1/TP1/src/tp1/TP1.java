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
        Dictionnaire dictionnaire = new Dictionnaire();
        
        try {
            InputStream ips = new FileInputStream(fichier);
            InputStreamReader ipsr = new InputStreamReader(ips);
            BufferedReader br = new BufferedReader(ipsr);
            String ligne;
            while ((ligne = br.readLine()) != null) {
                System.out.println(ligne);
                infos = ligne.split(";");
                User u = dictionnaire.addUserIfNonExist(infos[1]);
                Theme t = dictionnaire.addThemeIfNonExist(infos[2]);
                dictionnaire.addOrIncrementeLiaisonIfNonExist(u, t);
            }
            br.close();
        } catch (IOException e) {
            System.out.println(e.toString());
        }
        
        Liaison l = null;
        System.out.print("\t\t");
        for(Theme t : dictionnaire.getThemes()){
            System.out.print(t.getName());
            System.out.print("\t");
        }
        System.out.println("");
        for(User u : dictionnaire.getUsers()){
            System.out.print(u.getName());
            if(u.getName().length() < 8){
                System.out.print("\t");
            }
            System.out.print("\t");
            for(Theme t : dictionnaire.getThemes()){
                if((l = dictionnaire.getLiaison(u, t)) != null){
                    System.out.print(l.getCpt());
                }
                else{
                    System.out.print("0");
                }
                System.out.print("\t\t");
            }
            System.out.println();
        }
        
        dictionnaire.matriceDistanceEntreUsager();
        dictionnaire.ecrireMatriceDistanceEntreUsagerFichier("resultat.txt");
    }

}
