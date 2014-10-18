/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package tp1;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author jules
 */
public class Dictionnaire {
    private List<User> users;
    private List<Theme> themes;
    private List<Liaison> liaisons;
    private List<Liaison> liaisonsTRU;
    private List<Couple> couples;
    
    public Dictionnaire(){
        this.users = new ArrayList();
        this.themes = new ArrayList();
        this.liaisons = new ArrayList();
        this.liaisonsTRU = new ArrayList();
        this.couples = new ArrayList();
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
    
    public List<Theme> getThemes() {
        return themes;
    }
    
    public List<Liaison> getLiaisons() {
        return liaisons;
    }

    public void setThemes(List<Theme> themes) {
        this.themes = themes;
    }
    
    public void addTheme(Theme t){
        this.themes.add(t);
    }
    
    public User addUserIfNonExist(String u){
        int index = 0;
        boolean b = false;
        for(int i=0; i<this.users.size(); i++){
            if(u.compareTo(this.users.get(i).getName())==0){
                b = true;
                index = i;
            }
        }
        if(!b){
            User user = new User(u);
            this.users.add(user);
            return user;
        }
        return this.users.get(index);
    }
    
    public Theme addThemeIfNonExist(String t){
        int i;
        int index = 0;
        boolean b = false;
        for(i=0; i<this.themes.size(); i++){
            if(t.compareTo(this.themes.get(i).getName())==0){
                b = true;
                index = i;
            }
        }
        if(!b){
            Theme theme = new Theme(t);
            this.themes.add(theme);
            return theme;
        }
        return this.themes.get(index);
    }
    
    public Liaison getLiaison(User u, Theme t){
        for(Liaison l : this.liaisons){
            if((l.getUser().equals(u)) && (l.getTheme().equals(t))){
                return l;
            }
        }
        return null;
    }
    
    public int getCptOfLiaison(User u, Theme t){
        for(Liaison l : this.liaisons){
            if((l.getUser().equals(u)) && (l.getTheme().equals(t))){
                return l.getCpt();
            }
        }
        return 0;
    }
    
    public int addOrIncrementeLiaisonIfNonExist(User u, Theme t){
        for(int i=0; i<this.liaisons.size(); i++){
            if((liaisons.get(i).getUser().equals(u)) && (liaisons.get(i).getTheme().equals(t))){
                liaisons.get(i).incrementeCpt();
                return liaisons.get(i).getCpt();
            }
        }
        liaisons.add(new Liaison(u, t, 1));
        return 1;
    }
    
    public boolean coupleExiste(Theme theme1, Theme theme2){
        for(Couple c : this.couples){
            if(c.getTheme1() == theme1){
                if(c.getTheme2() == theme2){
                    return true;
                }
            }
            if(c.getTheme1() == theme2){
                if(c.getTheme2() == theme1){
                    return true;
                }
            }
        }
        return false;
    }
    
    public boolean liaisonTRUExiste(User u, Theme theme){
        for(Liaison l : this.liaisonsTRU){
            if(l.getTheme() == theme && l.getUser() == u){
                return true;
            }
        }
        return false;
    }
    
    public Theme coupleExisteWithAnotherTheme(Theme theme){
        for(Couple c : this.couples){
            if(c.getTheme1() == theme){
                return c.getTheme2();
            }
            if(c.getTheme2() == theme){
                return c.getTheme1();
            }
        }
        return null;
    }
    
    public void matriceUsagerTheme(){
        Liaison l = null;
        System.out.print("\t\t");
        for(Theme t : this.getThemes()){
            System.out.print(t.getName());
            System.out.print("\t");
        }
        System.out.println("");
        for(User u : this.getUsers()){
            System.out.print(u.getName());
            if(u.getName().length() < 8){
                System.out.print("\t");
            }
            System.out.print("\t");
            for(Theme t : this.getThemes()){
                if((l = this.getLiaison(u, t)) != null){
                    System.out.print(l.getCpt());
                }
                else{
                    System.out.print("0");
                }
                System.out.print("\t\t");
            }
            System.out.println();
        }
    }
    
    public void matriceDistanceEntreUsager(){
        float distance;
        int intersection;
        int union;
        int tmp1;
        int tmp2;
        System.out.println("###########################################################################################");
        System.out.println("########################### MATRICE DES DISTANCES ENTRE USAGERS ###########################");
        System.out.println("###########################################################################################");
        System.out.print("\t\t");
        for(int i=0; i<this.users.size(); i++){
            if(this.users.get(i).getName().length()>=8){
                System.out.print(this.users.get(i).getName().subSequence(0, 7));
            }
            else{
                System.out.print(this.users.get(i).getName());
            }
            System.out.print("\t");
        }
        System.out.println("");
        for(int i=0; i<this.users.size(); i++){
            System.out.print(this.users.get(i).getName());
            if(this.users.get(i).getName().length() < 8){
                System.out.print("\t");
            }
            System.out.print("\t");
            for(int j=0; j<this.users.size(); j++){
                intersection = 0;
                union = 0;
                for(Theme t : this.getThemes()){
                    tmp1 = this.getCptOfLiaison(this.users.get(i), t);
                    tmp2 = this.getCptOfLiaison(this.users.get(j), t);
                    if(tmp1 >= tmp2){
                        intersection += tmp2;
                        union += tmp1;
                    }
                    if(tmp1 < tmp2){
                        intersection += tmp1;
                        union += tmp2;
                    }
                }
                distance = 1 - (((float)intersection)/union);
                if(String.valueOf(distance).length() > 4){
                    System.out.print(String.valueOf(distance).substring(0, 4) + "\t");
                }
                else{
                    System.out.print(String.valueOf(distance) + "\t");
                }
            }
            System.out.println("");
        }
        System.out.println("###########################################################################################");
        System.out.println("###########################################################################################");
        System.out.println("###########################################################################################");
    }
    
    public void ecrireMatriceUsagersThemes(String nom){
        Liaison l = null;
        try{
            FileWriter fw = new FileWriter(nom, false);
            BufferedWriter output = new BufferedWriter(fw);
            for(int i=0; i<this.getUsers().size(); i++){
                for(int j=0; j<this.getThemes().size(); j++){
                    if((l = this.getLiaison(this.users.get(i), this.themes.get(j))) != null){
                        output.write(String.valueOf(l.getCpt()));
                    }
                    else{
                        output.write("0");
                    }
                    if(j<(this.getThemes().size()-1)){
                        output.write(";");
                    }
                }
                output.write("\n");
                output.flush();
            }
            output.flush();
            output.close();
        }
        catch(IOException ioe){
            System.out.print("Erreur : ");
            ioe.printStackTrace();
        }
    }
    
    public void ecrireMatriceDistanceEntreUsagerFichier(String nom){
        float distance;
        int intersection;
        int union;
        int tmp1;
        int tmp2;
        try{
            FileWriter fw = new FileWriter(nom, false);
            BufferedWriter output = new BufferedWriter(fw);
            output.write("*Vertices " + this.users.size() + "\n");
            output.flush();
            for(int i=0; i<this.users.size(); i++){
                output.write((i+1) + " \"" + this.users.get(i).getName() + "\"" + "\n");
                output.flush();
            }
            output.write("*Matrix" + "\n");
            output.flush();
            for(int i=0; i<this.users.size(); i++){
                for(int j=0; j<this.users.size(); j++){
                    intersection = 0;
                    union = 0;
                    for(Theme t : this.getThemes()){
                        tmp1 = this.getCptOfLiaison(this.users.get(i), t);
                        tmp2 = this.getCptOfLiaison(this.users.get(j), t);
                        if(tmp1 >= tmp2){
                            intersection += tmp2;
                            union += tmp1;
                        }
                        if(tmp1 < tmp2){
                            intersection += tmp1;
                            union += tmp2;
                        }
                    }
                    distance = 1 - (((float)intersection)/union);
                    if(distance < 0.5){
                        output.write("1");
                    }
                    else{
                        output.write("0");
                    }
                    output.write(" ");
                }
                output.write("\n");
                output.flush();
            }
            output.close();
        }
        catch(IOException ioe){
            System.out.print("Erreur : ");
            ioe.printStackTrace();
        }
    }
    
    public void ecrireMatriceDistanceEntreThemesFichier(String nom){
        float distance;
        int intersection;
        int union;
        int tmp1;
        int tmp2;
        try{
            FileWriter fw = new FileWriter(nom, false);
            BufferedWriter output = new BufferedWriter(fw);
            output.write("*Vertices " + this.themes.size() + "\n");
            output.flush();
            for(int i=0; i<this.themes.size(); i++){
                output.write((i+1) + " \"" + this.themes.get(i).getName() + "\"" + "\n");
                output.flush();
            }
            output.write("*Matrix" + "\n");
            output.flush();
            for(int i=0; i<this.themes.size(); i++){
                for(int j=0; j<this.themes.size(); j++){
                    intersection = 0;
                    union = 0;
                    for(User u : this.getUsers()){
                        tmp1 = this.getCptOfLiaison(u, this.themes.get(i));
                        tmp2 = this.getCptOfLiaison(u, this.themes.get(j));
                        if(tmp1 >= tmp2){
                            intersection += tmp2;
                            union += tmp1;
                        }
                        if(tmp1 < tmp2){
                            intersection += tmp1;
                            union += tmp2;
                        }
                    }
                    distance = 1 - (((float)intersection)/union);
                    if(distance < 0.5){
                        if(!this.coupleExiste(this.themes.get(i), this.themes.get(j))){
                            this.couples.add(new Couple(this.themes.get(i), this.themes.get(j)));
                        }
                        output.write("1");
                    }
                    else{
                        output.write("0");
                    }
                    output.write(" ");
                }
                output.write("\n");
                output.flush();
            }
            output.close();
        }
        catch(IOException ioe){
            System.out.print("Erreur : ");
            ioe.printStackTrace();
        }
    }
    
    public void ecrireMatriceUsagersThemesRecommandes(String nom){
        Liaison l = null;
        Theme tmp = null;
        try{
            FileWriter fw = new FileWriter(nom, false);
            BufferedWriter output = new BufferedWriter(fw);
            for(int i=0; i<this.getUsers().size(); i++){
                for(int j=0; j<this.getThemes().size(); j++){
                    if((l = this.getLiaison(this.users.get(i), this.themes.get(j))) != null){
                        if((tmp = this.coupleExisteWithAnotherTheme(this.themes.get(j)))!=null){
                            this.liaisonsTRU.add(new Liaison(this.users.get(i), tmp, 1));
                        }
                    }
                    if(this.liaisonTRUExiste(this.users.get(i), this.themes.get(j))){
                        output.write("1");
                    }
                    else{
                        output.write("0");
                    }
                    if(j<(this.getThemes().size()-1)){
                        output.write(";");
                    }
                }
                output.write("\n");
                output.flush();
            }
            output.flush();
            output.close();
        }
        catch(IOException ioe){
            System.out.print("Erreur : ");
            ioe.printStackTrace();
        }
    }
}
