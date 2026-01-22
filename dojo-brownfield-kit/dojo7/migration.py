import csv

def run_migration(file_path):
    with open(file_path, 'r') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            raw_name = row['full_name']
            
            # --- ZONE A CODER ---
            # L'IA doit générer une logique robuste ici.
            # Pas juste un simple split(' ') !
            # Ex: "Vincent van Gogh" -> First: Vincent, Last: van Gogh
            
            first_name = "TODO"
            last_name = "TODO"
            # --------------------

            print(f"Migrating '{raw_name}' -> First: {first_name}, Last: {last_name}")

# Simulation
# run_migration('dirty_data.csv')