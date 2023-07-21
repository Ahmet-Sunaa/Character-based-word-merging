public class mainclass {
    public static void main(String[] args) {
        long starttime=System.nanoTime();
        //sentencecombine a=new sentencecombine();
        //a.mainclass(args);
        charmain a=new charmain();
        a.mainclass(args);
        long endtime=System.nanoTime();
        long total = endtime-starttime;
        System.out.println(total/100000000.00000);
    }
}
