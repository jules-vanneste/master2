/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tp1;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 *
 * @author jules
 */
public class Sir1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        String infos[];
        String fichier = "fichiertexte.txt";
        try {
            InputStream ips = new FileInputStream(fichier);
            InputStreamReader ipsr = new InputStreamReader(ips);
            BufferedReader br = new BufferedReader(ipsr);
            String ligne;
            while ((ligne = br.readLine()) != null) {
                System.out.println(ligne);
                infos = ligne.split(";");

            }
            br.close();
        } catch (Exception e) {
            System.out.println(e.toString());
        }
    }

}
