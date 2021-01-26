GET _cluster/health

GET /_cat/shards?v

# Curent presov_streets ###################################
DELETE /presov_streets
PUT /presov_streets
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /presov_streets/_doc/1

# bst #Spolu vsetko#############################
PUT /bst
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /bst/_doc/
DELETE /bst
GET /bst/_search?scroll=1m
{
  "from" : 0, "size" : 10000,
  "query": {
    "match_all": {}
  }
}


# Weather #spolu###################
PUT /weather
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  },
  "mappings": {
    "properties": {
      "geometry": {
        "properties": {
          "coordinates": {
            "type": "float"
          },
        "type": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
              }
            }
          }
        }
      },
      "properties": {
        "properties": {
          "Clouds_All": {
            "type": "long"
            },
          "Current_Time": {
            "type": "long"
            },
          "Id": {
            "type": "long"
            },
          "Main_FeelsLike": {
            "type": "float"
            },
          "Main_Humidity": {
            "type": "long"
            },
          "Main_Pressure": {
            "type": "long"
            },
          "Main_Temp": {
            "type": "float"
            },
          "Main_TempMax": {
          "type": "long"
            },
          "Main_TempMin": {
            "type": "float"
            },
          "Sunrise": {
            "type": "long"
            },
          "Sunset": {
            "type": "long"
            },
          "Type": {
            "type": "text",
              "fields": {
                "keyword": {
                  "type": "keyword",
                  "ignore_above": 256
                  }
                }
            },
          "Visibility": {
            "type": "long"
            },
          "Weather_Description": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
                }
              }
            },
          "Weather_Icon": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
                }
              }
            },
          "Weather_Id": {
            "type": "long"
            },
          "Weather_Main": {
            "type": "text",
            "fields": {
              "keyword": {
                "type": "keyword",
                "ignore_above": 256
                }
              }
            },
          "Wind_Deg": {
            "type": "long"
            },  
          "Wind_Speed": {
            "type": "long"
            }
          }
        },
        "type": {
          "type": "text",
          "fields": {
            "keyword": {
              "type": "keyword",
              "ignore_above": 256
              }
            }
          }
        }
      }
}
GET /weather/_doc/
DELETE /weather
GET /weather/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}



# MHD PRESOV ##############################
PUT /mhdpo
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /mhdpo/_doc/
DELETE /mhdpo
GET /mhdpo/_search
{
  "from" : 0, "size" : 10000,
  "query": {
    "match_all": {}
  }
}
# Curent MhdPO ###################################
DELETE /current_mhdpo
PUT /current_mhdpo
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_mhdpo/_doc/1
POST /current_mhdpo/_doc/1

# SAD PRESOV ##############################
PUT /sadpo
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /sadpo/_doc/
DELETE /sadpo
GET /sadpo/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}

# Curent SadPO ###################################
DELETE /current_sadpo
PUT /current_sadpo
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_sadpo/_doc/1

# Traffic Situation ##############################
PUT /traffic_situation
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /traffic_situation/_doc/
DELETE /traffic_situation
GET /traffic_situation/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}

# Curent traffic_situation ###################################
DELETE /current_traffic_situation
PUT /current_traffic_situation
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_traffic_situation/_doc/1

# Trains ##############################
PUT /trains
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /trains/_doc/
DELETE /trains
GET /trains/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}

# Curent trains###################################
DELETE /current_trains
PUT /current_trains
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_trains/_doc/1

# WeatherPo ##############################
PUT /weather_po
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  },
  "mappings": {
"properties": {
"geometry": {
"properties": {
"coordinates": {
"type": "float"
},
"type": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
}
}
},
"properties": {
"properties": {
"Clouds_All": {
"type": "long"
},
"Current_Time": {
"type": "long"
},
"Id": {
"type": "long"
},
"Main_FeelsLike": {
"type": "float"
},
"Main_Humidity": {
"type": "long"
},
"Main_Pressure": {
"type": "long"
},
"Main_Temp": {
"type": "float"
},
"Main_TempMax": {
"type": "long"
},
"Main_TempMin": {
"type": "float"
},
"Sunrise": {
"type": "long"
},
"Sunset": {
"type": "long"
},
"Type": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
},
"Visibility": {
"type": "long"
},
"Weather_Description": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
},
"Weather_Icon": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
},
"Weather_Id": {
"type": "long"
},
"Weather_Main": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
},
"Wind_Deg": {
"type": "long"
},
"Wind_Speed": {
"type": "long"
}
}
},
"type": {
"type": "text",
"fields": {
"keyword": {
"type": "keyword",
"ignore_above": 256
}
}
}
}
}
}
GET /weather_po/_doc/
DELETE /weather_po
GET /weather_po/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}
# Curent weather_po###################################
DELETE /current_weather_po
PUT /current_weather_po
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_weather_po/_doc/1


# WeatherKE ##############################
PUT /weather_ke
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /weather_ke/_doc/
DELETE /weather_ke
GET /weather_ke/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}
# Curent weather_ke###################################
DELETE /current_weather_ke
PUT /current_weather_ke
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /current_weather_ke/_doc/1

# UB ##############################
PUT /ub
{
  "settings": {
    "number_of_shards": 1,
    "number_of_replicas": 0
  }
}
GET /ub/_doc/
DELETE /ub
GET /ub/_search
{
  "from" : 0, "size" : 1000,
  "query": {
    "match_all": {}
  }
}

