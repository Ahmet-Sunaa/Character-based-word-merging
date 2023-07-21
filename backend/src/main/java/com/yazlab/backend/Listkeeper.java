package com.yazlab.backend;

import java.util.ArrayList;

public class Listkeeper {
    String a;
    ArrayList<Integer> first = new ArrayList<Integer>();
    ArrayList<Integer> second = new ArrayList<Integer>();

    Listkeeper(String a){
        this.a=a;
    }
    Listkeeper(ArrayList<Integer> first,ArrayList<Integer> second){
        this.first=first;
        this.second=second;
    }
    Listkeeper(){

    }
}
