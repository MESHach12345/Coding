import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Assignment1 {

	public static void main(String[] args) {
		
		//Initializing Variables
		int option;
		int numOfOrders=0;
		int menuNumber;
		String[] menu = {"singledish", "doubledish", "singlecone", "doublecone", "wafflecone", "bananasplit", "turtle", "shake", "malt", "concrete", "soda", "float", "icesandwich"};
		
		
		Scanner keyboardInput = new Scanner(System.in);
		File inFile = null;
		Scanner fileInput = null;
		
		
		do {
			System.out.println("Welcome to Immediate Indulgences Ice-Cream!\n"
					+ "Would you like to: \n"
					+ "1) Manually process an order \n"
					+ "2) Read an order from a file");
			
			option = keyboardInput.nextInt();
			
			if (option==1) {
				
				System.out.print("How many items are you ordering? ");
				numOfOrders = keyboardInput.nextInt();
				String[] order = new String[numOfOrders];
				
				for(int i= 0; i<numOfOrders; i++) {
					do {
						System.out.print("Menu: \n"
								+ "\t 1.   Single Scoop Dish - $1.50 \n"
								+ "\t 2.   Double Scoop Dish - $3.00 \n"
								+ "\t 3.   Single Scoop Cone - $2.00 \n"
								+ "\t 4.   Double Scoop Cone � $3.50 \n"
								+ "\t 5.   Waffle Cone - $4.00 \n"
								+ "\t 6.   Banana Split - $5.00 \n"
								+ "\t 7.   Turtle Sundae - $6.25 \n"
								+ "\t 8.   Shake - $4.00 \n"
								+ "\t 9.   Malt - $4.50 \n" 
								+ "\t 10.  Concrete Malt - $5.00 \n"
								+ "\t 11.  Soda - $1.50 \n"
								+ "\t 12.  Soda Float - $3.25 \n"
								+ "\t 13.  Ice Cream Sandwich - $3.75 \n" 
								+ "Please choose item #" + (i+1) + ": ");
						
						menuNumber = keyboardInput.nextInt();
						
						if (!(menuNumber<1 || menuNumber>13)) {
							order[i] = menu[menuNumber-1];
						} else {
							System.out.println("You have entered an invalid Menu Number. Please enter a valid Menu Number");
						}
						
					} while (menuNumber<1 || menuNumber>13);
					
				}
				
			} else if (option==2) {
				
				System.out.println("Processing Order from File");
				System.out.println("Please enter the filename: ");
				
				keyboardInput.nextLine();
				
				String fileName = keyboardInput.nextLine();
				
				try {
					inFile = new File("./src/"+fileName+".txt");
					fileInput = new Scanner(inFile);
				} catch (FileNotFoundException err) {
					err.printStackTrace();
				}
				
				while (fileInput.hasNextInt()) {
					numOfOrders = fileInput.nextInt();
				}
				
				String[] order = new String[numOfOrders];
				
				while (fileInput.hasNext()) {
					for (int i=0; i<numOfOrders; i++) {
						order[i] = fileInput.next();
						System.out.println("read "+order[i]);
					}
				}
				
				fileInput.close();
							
			} else {
				
				System.out.println("You have entered an Invalid Option. Please enter a valid option");
				
			}
		} while (option<1 || option>2);
			
	}

}
