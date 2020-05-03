import pandas as pd
import json

# TODO: find longest text

class Confession:
    def __init__(self, label, text):
        self.label = label
        self.text = text 
    
    def get_text(self):
        return self.text
    
    def get_label(self):
        return self.label

CSV_FILE_NAME = 'confessions.csv' 

confessions_read = pd.read_csv(CSV_FILE_NAME)

labels = confessions_read.label.to_list()
# labels_set = set(label_column) # just in case we need it

texts = confessions_read.text.to_list()

confession_zip = list(zip(labels, texts))
confessions = []

for (label, text) in confession_zip:
    confession = Confession(label, text)
    confessions.append(confession)

confessions_dict = [ob.__dict__ for ob in confessions]
json_string = json.dumps(confessions_dict, indent=4)

with open("confessions.json", "w") as outfile: 
    outfile.write(json_string)

