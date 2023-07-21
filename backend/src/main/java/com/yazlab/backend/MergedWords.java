package com.yazlab.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.ArrayList;
import java.util.List;

@Document(collection = "words")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MergedWords {
    @Id
    private ObjectId id;
   private List<String> words;

   private String mergedWord="";
   double time=  0.0;


   public MergedWords(List<String> words,String mergedWord,double time){
       this.words=words;
       this.mergedWord=mergedWord;
       this.time=time;
   }

   public static String mainFunc(ArrayList<String> list){
       ArrayList<Listkeeper> x = new ArrayList<Listkeeper>();
       for (String s : list) {
           Listkeeper str = new Listkeeper(s.replace(",",""));
           x.add(str);
       }
       ArrayList<Character> charlist = new ArrayList<Character>();
       String lastword = x.get(0).a;
       String Controller="";
       for (int i = 0; i < x.size()-1; i++) {
           charlist = func1(lastword, x.get(i+1).a);
           for (int j = 0; j < charlist.size(); j++) {
               Controller+=charlist.get(j);
           }
           if(Controller.equals(lastword)){
               System.out.println(x.get(i+1).a+" cümlesi birleştirilemedi");
           }
           Controller="";
           lastword="";
           for (int j = 0; j < charlist.size(); j++) {
               lastword+=charlist.get(j);
           }

       }
       lastword="";
       for (int j = 0; j < charlist.size(); j++) {
           lastword+=charlist.get(j);
       }

       return lastword;
   }
    public static ArrayList<Character> func1(String lastword, String b){
        ArrayList<Integer> list = new ArrayList<Integer>();
        ArrayList<Integer> list2 = new ArrayList<Integer>();
        ArrayList<Integer> list3 = new ArrayList<Integer>();

        Listkeeper gecici=new Listkeeper();

        gecici = find_indis(lastword, b);
        list=gecici.first;
        list2= gecici.second;



        list3=find_max_size_index(list);

        ArrayList<Character> charlist = new ArrayList<Character>();

        if(!list3.isEmpty() ){
            ArrayList<Integer> gecici_list = new ArrayList<Integer>();
            gecici_list=find_max_size_index(list);
            int index=list.get(gecici_list.get(1)-gecici_list.get(0)+1);
            int max = gecici_list.get(0);

            for (int i = 0; i < gecici_list.size(); i+=2) {
                if(gecici_list.get(i)>=max){
                    index=list.get(gecici_list.get(i+1));
                    max=gecici_list.get(i);
                }
            }

            for (int i = 0; i < index+1; i++) {
                charlist.add(lastword.charAt(i));
            }

        }else{
            for (int i=0; i <lastword.length(); i++) {
                charlist.add(lastword.charAt(i));
            }
            return charlist;
        }
        if(!list3.isEmpty()){
            int i;
            i = list2.get(list2.size() - 1) + 1;
            for (; i <b.length(); i++) {
                charlist.add(b.charAt(i));

            }
        }


        return charlist;
    }

    public static ArrayList<Integer> find_max_size_index(ArrayList<Integer> list2){
        int counter=1;
        ArrayList<Integer> list3 = new ArrayList<Integer>();
        for (int i = 0; i < list2.size(); i++) {
            int j=0;
            for ( j = i+1; j < list2.size(); ) {
                if(list2.get(i).equals(list2.get(j)-1)){
                    if(i+1<list2.size()){
                        i++;
                        j++;
                    }
                    counter++;
                }
                else{
                    break;
                }
            }
            if(counter>2){
                list3.add(counter);
                list3.add(i);
            }
            counter=1;
        }

        return list3;
    }

    public static Listkeeper find_indis(String a,String b){
        int counter=0;
        ArrayList<Integer> list = new ArrayList<Integer>();
        ArrayList<Integer> list2 = new ArrayList<Integer>();
        ArrayList<Integer> list4 = new ArrayList<Integer>();
        ArrayList<Integer> list5 = new ArrayList<Integer>();

        int saver=0;

        for (int i = 0; i < a.length()-1; i++) {
            for (int j = 0; j < b.length()-1; j++) {
                if(a.charAt(i)==b.charAt(j)){
                    if(i+1<a.length()){
                        if(a.charAt(i+1)==b.charAt(j+1)){
                            counter+=1;
                        }else{
                            saver=counter+1;
                            counter=0;
                            break;
                        }
                        if (counter>=1){
                            list4.add(i);
                            list5.add(j);
                            i++;
                        }
                    }else{
                        saver=counter+1;
                        counter=0;
                        break;
                    }


                }
            }
            if(counter>1 || saver>2){
                for (int j = 0; j < list4.size(); j++) {
                    list.add(list4.get(j));
                }
                for (int j = 0; j < list5.size(); j++) {
                    list2.add(list5.get(j));
                }
                if(saver>2 && counter==0){
                    list.add(list4.get(list4.size()-1)+1);
                    list2.add(list5.get(list5.size()-1)+1);
                }
            }else{
                list4.clear();
                list5.clear();
            }
            saver=0;
            counter=0;
        }
        Listkeeper returnlist=new Listkeeper(list, list2);

        return returnlist;
    }

}
