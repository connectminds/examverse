import json

with open('questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

math_questions = None
for subject in data['subjects']:
    if subject['name'] == 'Mathematics':
        math_questions = subject['questions']
        break

if math_questions:
    print(f"Total Mathematics Questions: {len(math_questions)}\n")
    
    errors_found = []
    
    for idx, q in enumerate(math_questions, 1):
        issues = []
        
        # Check required fields
        if 'id' not in q:
            issues.append("Missing 'id'")
        if 'year' not in q:
            issues.append("Missing 'year'")
        if 'topic' not in q:
            issues.append("Missing 'topic'")
        if 'question' not in q:
            issues.append("Missing 'question'")
        if 'options' not in q or not isinstance(q['options'], list):
            issues.append("Missing or invalid 'options'")
        if 'correctAnswer' not in q:
            issues.append("Missing 'correctAnswer'")
        if 'explanation' not in q:
            issues.append("Missing 'explanation'")
        
        # Check options structure
        if 'options' in q and isinstance(q['options'], list):
            if len(q['options']) != 4:
                issues.append(f"Invalid number of options: {len(q['options'])} (should be 4)")
            
            for opt in q['options']:
                if 'label' not in opt or 'text' not in opt:
                    issues.append(f"Option missing 'label' or 'text': {opt}")
        
        # Check if correctAnswer matches an option
        if 'correctAnswer' in q and 'options' in q:
            valid_labels = [opt['label'] for opt in q['options']]
            if q['correctAnswer'] not in valid_labels:
                issues.append(f"correctAnswer '{q['correctAnswer']}' not in options: {valid_labels}")
        
        if issues:
            errors_found.append({
                'index': idx,
                'id': q.get('id', 'N/A'),
                'topic': q.get('topic', 'N/A'),
                'issues': issues
            })
    
    if errors_found:
        print("ERRORS FOUND:\n")
        for error in errors_found:
            print(f"Question {error['index']} ({error['id']} - {error['topic']}):")
            for issue in error['issues']:
                print(f"  • {issue}")
            print()
    else:
        print("✓ All Mathematics questions are VALID!")
        print(f"  - All {len(math_questions)} questions have correct structure")
        print(f"  - All options are properly formatted")
        print(f"  - All correctAnswers match valid option labels")
else:
    print("Mathematics subject not found!")
