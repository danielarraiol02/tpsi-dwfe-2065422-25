import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class FootballPage extends StatefulWidget {
  const FootballPage({super.key});

  @override
  _FootballPageState createState() => _FootballPageState();
}

class _FootballPageState extends State<FootballPage> {
  List<dynamic> leagues = [];
  bool loading = true;
  String? error; // To store any error messages

  // Replace with your actual API key
  final String apiKey = "2e73521261184664a75e8461edffad99";

  @override
  void initState() {
    super.initState();
    getData(); // Fetch data when the screen loads
  }

  Future<void> getData() async {
    try {
      final response = await http.get(
        Uri.parse("https://api.football-data.org/v4/competitions"),
        headers: {"X-Auth-Token": apiKey}, // API Authentication
      );

      debugPrint("Response Status: ${response.statusCode}"); // Debugging

      if (response.statusCode != 200) {
        throw Exception("HTTP error! Status: ${response.statusCode}");
      }

      final data = jsonDecode(response.body);

      if (data.containsKey('competitions') && data['competitions'] is List) {
        setState(() {
          leagues = data['competitions'];
          loading = false;
        });
      } else {
        setState(() {
          error = "No leagues data found in the response";
          loading = false;
        });
      }
    } catch (err) {
      debugPrint("Error fetching data: $err"); // Log the error
      setState(() {
        error = err.toString();
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("API Futebol")),
      body: Center(
        child:
            loading
                ? const CircularProgressIndicator() // Show loading spinner
                : error != null
                ? Text(
                  "Erro: $error",
                  style: const TextStyle(color: Colors.red),
                )
                : ListView.builder(
                  itemCount: leagues.length,
                  itemBuilder: (context, index) {
                    final league = leagues[index];
                    return ListTile(
                      title: Text(league["name"]),
                      subtitle: Text(league["area"]["name"]),
                    );
                  },
                ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pop(context); // Navigate back to the previous page
        },
        child: const Icon(Icons.arrow_back),
      ),
    );
  }
}
