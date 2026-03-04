#!/usr/bin/env python3
"""
Enhance questions.json with difficulty levels and concept tags.
Adds 'difficulty' (Easy/Medium/Hard) and 'tags' (concept tags) to all questions.
"""

import json
import re

# Map topics to default difficulty and tags
TOPIC_CONFIG = {
    # Mathematics
    "Standard Form": {"difficulty": "Easy", "tags": ["number", "standard_form", "scientific_notation"]},
    "Sets": {"difficulty": "Medium", "tags": ["set_theory", "intersection", "union", "logic"]},
    "Arithmetic Progression": {"difficulty": "Medium", "tags": ["sequence", "algebra", "progression"]},
    "Logarithms": {"difficulty": "Hard", "tags": ["logarithm", "algebra", "exponent", "index"]},
    "Algebra": {"difficulty": "Medium", "tags": ["algebra", "expansion", "simplification"]},
    "Surds": {"difficulty": "Hard", "tags": ["surds", "irrational", "algebra"]},
    "Simple Interest": {"difficulty": "Easy", "tags": ["finance", "percentage", "interest"]},
    "Growth and Decay": {"difficulty": "Medium", "tags": ["exponential", "growth", "percentage"]},
    "Percentage Error": {"difficulty": "Easy", "tags": ["percentage", "error", "calculation"]},
    "Geometry": {"difficulty": "Medium", "tags": ["geometry", "polygon", "angle"]},
    "Simultaneous Equations": {"difficulty": "Medium", "tags": ["algebra", "equation", "linear"]},
    "Variation": {"difficulty": "Medium", "tags": ["relationship", "proportion", "variation"]},
    
    # Chemistry
    "Atomic Structure": {"difficulty": "Medium", "tags": ["atom", "electron", "nucleus", "structure"]},
    "Periodic Table": {"difficulty": "Easy", "tags": ["periodic_table", "element", "property"]},
    "Chemical Bonding": {"difficulty": "Medium", "tags": ["bonding", "electronegativity", "molecule"]},
    "Acids and Bases": {"difficulty": "Medium", "tags": ["acid", "base", "pH", "salt"]},
    "Redox Reactions": {"difficulty": "Hard", "tags": ["redox", "oxidation", "reduction", "reaction"]},
    "Equilibrium": {"difficulty": "Hard", "tags": ["equilibrium", "kinetic", "thermodynamic"]},
    "Organic Chemistry": {"difficulty": "Hard", "tags": ["organic", "hydrocarbon", "functional_group"]},
    "States of Matter": {"difficulty": "Easy", "tags": ["state", "solid", "liquid", "gas", "plasma"]},
    
    # Biology
    "Cell Structure": {"difficulty": "Easy", "tags": ["cell", "organelle", "membrane", "structure"]},
    "Photosynthesis": {"difficulty": "Medium", "tags": ["photosynthesis", "chlorophyll", "energy", "glucose"]},
    "Respiration": {"difficulty": "Medium", "tags": ["respiration", "aerobic", "anaerobic", "energy"]},
    "Genetics": {"difficulty": "Hard", "tags": ["genetics", "inheritance", "allele", "genotype"]},
    "Evolution": {"difficulty": "Medium", "tags": ["evolution", "natural_selection", "adaptation"]},
    "Ecology": {"difficulty": "Medium", "tags": ["ecology", "ecosystem", "food_chain", "population"]},
    "Homeostasis": {"difficulty": "Medium", "tags": ["homeostasis", "regulation", "feedback"]},
    
    # English Language
    "Grammar": {"difficulty": "Easy", "tags": ["grammar", "syntax", "tense"]},
    "Vocabulary": {"difficulty": "Easy", "tags": ["vocabulary", "meaning", "synonym"]},
    "Comprehension": {"difficulty": "Medium", "tags": ["comprehension", "reading", "analysis"]},
    "Essay Writing": {"difficulty": "Hard", "tags": ["essay", "composition", "writing"]},
    "Literature": {"difficulty": "Medium", "tags": ["literature", "prose", "poetry", "drama"]},
    
    # Economics
    "Basic Economics": {"difficulty": "Easy", "tags": ["economics", "supply", "demand", "market"]},
    "Microeconomics": {"difficulty": "Medium", "tags": ["microeconomics", "consumer", "producer"]},
    "Macroeconomics": {"difficulty": "Hard", "tags": ["macroeconomics", "inflation", "gdp", "employment"]},
    "Money and Banking": {"difficulty": "Medium", "tags": ["money", "bank", "interest", "credit"]},
    "International Trade": {"difficulty": "Hard", "tags": ["trade", "export", "import", "exchange_rate"]},
    
    # Civic Education
    "Citizenship": {"difficulty": "Easy", "tags": ["citizenship", "rights", "responsibilities"]},
    "Government": {"difficulty": "Medium", "tags": ["government", "executive", "legislature", "judiciary"]},
    "Constitutional Law": {"difficulty": "Hard", "tags": ["constitution", "law", "institution"]},
    "Rights and Duties": {"difficulty": "Easy", "tags": ["rights", "duties", "freedom", "justice"]},
    
    # Data Processing
    "Database Design": {"difficulty": "Medium", "tags": ["database", "table", "key", "relationship"]},
    "SQL": {"difficulty": "Medium", "tags": ["sql", "query", "select", "join"]},
    "Data Manipulation": {"difficulty": "Medium", "tags": ["data", "manipulation", "import", "export"]},
    "Data Analysis": {"difficulty": "Hard", "tags": ["analysis", "statistics", "graph", "trend"]},
}

def infer_difficulty(topic, question=None):
    """Infer difficulty level from topic and question text."""
    if topic in TOPIC_CONFIG:
        return TOPIC_CONFIG[topic]["difficulty"]
    
    # Default difficulty based on question complexity heuristics
    if question:
        question_lower = question.lower()
        # Hard indicators
        if any(word in question_lower for word in ["prove", "derive", "complex", "advanced", "analyze"]):
            return "Hard"
        # Easy indicators
        if any(word in question_lower for word in ["simple", "basic", "define", "list", "identify"]):
            return "Easy"
    
    return "Medium"  # Default

def get_tags(topic, question=None):
    """Get concept tags for a question."""
    if topic in TOPIC_CONFIG:
        return TOPIC_CONFIG[topic]["tags"]
    
    # Auto-generate tags from topic
    tags = [topic.lower().replace(" ", "_")]
    
    if question:
        # Extract potential key terms
        keywords = ["formula", "equation", "theorem", "law", "principle", "concept"]
        for keyword in keywords:
            if keyword in question.lower():
                tags.append(keyword)
    
    return list(set(tags))  # Remove duplicates

def enhance_questions(input_file, output_file):
    """Add difficulty and tags to all questions."""
    
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    total_questions = 0
    updated_questions = 0
    
    for subject in data.get('subjects', []):
        subject_name = subject.get('name', 'Unknown')
        print(f"\nProcessing {subject_name}...")
        
        for question in subject.get('questions', []):
            total_questions += 1
            
            # Add difficulty if not present
            if 'difficulty' not in question:
                topic = question.get('topic', '')
                q_text = question.get('question', '')
                question['difficulty'] = infer_difficulty(topic, q_text)
                updated_questions += 1
            
            # Add tags if not present
            if 'tags' not in question:
                topic = question.get('topic', '')
                q_text = question.get('question', '')
                question['tags'] = get_tags(topic, q_text)
                updated_questions += 1
            
            # Ensure explanation exists (it should already)
            if 'explanation' not in question:
                question['explanation'] = "Review the course material for this topic."
    
    print(f"\nWriting enhanced questions to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"\n✓ Enhancement complete!")
    print(f"  Total questions: {total_questions}")
    print(f"  Questions updated: {updated_questions}")
    print(f"\nEnhanced file saved to: {output_file}")

if __name__ == "__main__":
    import os
    
    # File paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_file = os.path.join(script_dir, 'questions.json')
    output_file = os.path.join(script_dir, 'questions.json')
    
    # Run enhancement
    enhance_questions(input_file, output_file)
    print("\n✓ questions.json has been enhanced with difficulty levels and concept tags!")
