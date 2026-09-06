{
  "files": [
    {
      "path": "tsp_solver.py",
      "content": """
import tsp
import math

def solve_tsp(graph, start_node):
    # Initialize distances and previous nodes
    distances = {node: math.inf for node in graph}
    distances[start_node] = 0
    previous_nodes = {node: None for node in graph}

    # Initialize priority queue
    priority_queue = [(0, start_node)]

    while priority_queue:
        current_distance, current_node = min(priority_queue)
        priority_queue.remove((current_distance, current_node))

        # Visit all neighbors
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight

            # Update distances and previous nodes
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous_nodes[neighbor] = current_node
                priority_queue.append((distance, neighbor))

    # Build the Hamiltonian cycle
    path = []
    current_node = min(distances, key=distances.get)
    while current_node is not None:
        path.append(current_node)
        current_node = previous_nodes[current_node]
    path.append(path[0])  # Close the cycle

    return path, distances
"""
    },
    {
      "path": "app.py",
      "content": """
import tsp_solver
import tsp

def main():
    graph = {
        'A': {'B': 1, 'C': 3},
        'B': {'A': 1, 'C': 2},
        'C': {'A': 3, 'B': 2}
    }
    start_node = 'A'
    path, distances = tsp_solver.solve_tsp(graph, start_node)
    print("Path:", path)
    print("Distances:", distances)

if __name__ == "__main__":
    main()
"""
    },
    {
      "path": "config.py",
      "content": """
import os

class Config:
    DEBUG = os.environ.get('DEBUG') == 'True'
    DATABASE_URL = os.environ.get('DATABASE_URL')
"""
    },
    {
      "path": "database.py",
      "content": """
import sqlite3
from config import Config

def create_database():
    conn = sqlite3.connect('tsp.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS tsp_solutions
        (id INTEGER PRIMARY KEY, path TEXT, distance REAL)
    ''')
    conn.commit()
    conn.close()

def save_solution(path, distance):
    conn = sqlite3.connect('tsp.db')
    c = conn.cursor()
    c.execute('''
        INSERT INTO tsp_solutions (path, distance)
        VALUES (?, ?)
    ''', (path, distance))
    conn.commit()
    conn.close()
"""
    },
    {
      "path": "models.py",
      "content": """
class TSPSolution:
    def __init__(self, path, distance):
        self.path = path
        self.distance = distance

    def save(self):
        database.save_solution(self.path, self.distance)
"""
    },
    {
      "path": "routes.py",
      "content": """
from flask import Flask, jsonify
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/tsp', methods=['POST'])
def solve_tsp():
    data = request.get_json()
    graph = data['graph']
    start_node = data['start_node']
    path, distances = tsp_solver.solve_tsp(graph, start_node)
    solution = TSPSolution(path, distances)
    solution.save()
    return jsonify({'path': path, 'distances': distances})

if __name__ == '__main__':
    app.run(debug=Config.DEBUG)
"""
    },
    {
      "path": "tests/test_database.py",
      "content": """
import unittest
from database import create_database, save_solution

class TestDatabase(unittest.TestCase):
    def test_create_database(self):
        create_database()
        conn = sqlite3.connect('tsp.db')
        c = conn.cursor()
        c.execute('SELECT * FROM tsp_solutions')
        self.assertEqual(c.fetchall(), [])

    def test_save_solution(self):
        create_database()
        save_solution('A-B-C', 6)
        conn = sqlite3.connect('tsp.db')
        c = conn.cursor()
        c.execute('SELECT * FROM tsp_solutions')
        self.assertEqual(c.fetchall(), [(1, 'A-B-C', 6.0)])
"""
    },
    {
      "path": "requirements.txt",
      "content": """
flask
sqlite3
"""
    }
  ]
}