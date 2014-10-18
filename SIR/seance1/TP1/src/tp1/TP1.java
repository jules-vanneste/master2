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
        Dictionnaire dictionnaire = new Dictionnaire();
        lecture(dictionnaire);
        dictionnaire.matriceUsagerTheme();
        dictionnaire.matriceDistanceEntreUsager();
        dictionnaire.ecrireMatriceUsagersThemes("matrice_usagers_themes.txt");
        dictionnaire.ecrireMatriceDistanceEntreUsagerFichier("matrice_usagers.txt");
        dictionnaire.ecrireMatriceDistanceEntreThemesFichier("matrice_themes.txt");
        dictionnaire.ecrireMatriceUsagersThemesRecommandes("matrice_usagers_themes_recommandes.txt");
    }
    
    public static void lecture(Dictionnaire dictionnaire){
        String infos[];
        String fichier = "log.txt";
        
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
    }

}
