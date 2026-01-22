public class CustomerMigrator {
    
    // Ancien modèle (celui qu'il faut faire évoluer)
    static class Customer {
        String id;
        String fullName; // <--- C'est ici le problème
        String email;
    }

    public void migrateData(List<String> csvLines) {
        for (String line : csvLines) {
            String[] parts = line.split(",");
            Customer c = new Customer();
            c.id = parts[0];
            c.fullName = parts[1].replace("\"", ""); // Nettoyage basique
            
            // TODO: C'est ici que l'IA doit intervenir
            // Comment splitter c.fullName en firstName / lastName ?
            // Attention aux cas comme "Vincent van Gogh"
            
            saveToNewSchema(c);
        }
    }

    private void saveToNewSchema(Customer c) {
        // Simulation d'écriture en base
        System.out.println("Migrating: " + c.fullName); 
    }
}