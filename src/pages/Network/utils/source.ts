/**
 * @author lulongwen
 * Date: 2023-03-11 12:35
 * Description:
 */

export const initState = {
  'data': {
    'services': [
      {
      'id': 'YWdlbnQ6OnNvbmdz.1',
      'value': 'agent::songs',
      'label': 'agent::songs',
      'group': 'agent',
      'layers': ['GENERAL'],
      'normal': true,
    },
      {
      'id': 'YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1',
      'value': 'agent::recommendation',
      'label': 'agent::recommendation',
      'group': 'agent',
      'layers': ['GENERAL'],
      'normal': true,
    },
      {
      'id': 'YWdlbnQ6OmFwcA==.1',
      'value': 'agent::app',
      'label': 'agent::app',
      'group': 'agent',
      'layers': ['GENERAL'],
      'normal': true,
    },
      {
      'id': 'YWdlbnQ6OmdhdGV3YXk=.1',
      'value': 'agent::gateway',
      'label': 'agent::gateway',
      'group': 'agent',
      'layers': ['GENERAL'],
      'normal': true,
    },
      {
      'id': 'YWdlbnQ6OmZyb250ZW5k.1',
      'value': 'agent::frontend',
      'label': 'agent::frontend',
      'group': 'agent',
      'layers': ['GENERAL'],
      'normal': true,
    }],
  },
};

export const dashboardStore  = {
  calls: [],
  nodes: [],
  node: null,
  call: null,
  nodeMetricValue: {},
  linkServerMetrics: {},
  linkClientMetrics: {},
}

export const selectorStore = {
  services: [],
  destServices: [],
  pods: [],
  destPods: [],
  processes: [],
  destProcesses: [],
  currentService: null,
  currentPod: null,
  currentProcess: null,
  currentDestService: null,
  currentDestPod: null,
  currentDestProcess: null,
}

export const topologyStore = {
  layout: [],
  showConfig: false,
  selectedGrid: null,
  entity: "",
  layerId: "",
  activedGridItem: "",
  selectorStore,
  showTopology: false,
  currentTabItems: [],
  dashboards: [],
  currentDashboard: null,
  editMode: false,
  currentTabIndex: 0,
  showLinkConfig: false,
  "calls": [
    {
      "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
      "source": "YWdlbnQ6OmFwcA==.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OmdhdGV3YXk=.1",
      "value": 1,
      "targetObj": {
        "id": "YWdlbnQ6OmdhdGV3YXk=.1",
        "name": "agent::gateway",
        "type": "spring-webflux",
        "isReal": true,
        "layer": "GENERAL"
      },
      "sourceObj": {
        "id": "YWdlbnQ6OmFwcA==.1",
        "name": "agent::app",
        "type": "Express",
        "isReal": true,
        "layer": "GENERAL"
      }
    },
    {
      "id": "YWdlbnQ6OmZyb250ZW5k.1-YWdlbnQ6OmFwcA==.1",
      "source": "YWdlbnQ6OmZyb250ZW5k.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OmFwcA==.1",
      "value": 1,
      "targetObj": {
        "id": "YWdlbnQ6OmFwcA==.1",
        "name": "agent::app",
        "type": "Express",
        "isReal": true,
        "layer": "GENERAL"
      },
      "sourceObj": {
        "id": "YWdlbnQ6OmZyb250ZW5k.1",
        "name": "agent::frontend",
        "type": "APISIX",
        "isReal": true
      }
    },
    {
      "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
      "source": "YWdlbnQ6OmdhdGV3YXk=.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
      "value": 1,
      "targetObj": {
        "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
        "name": "agent::recommendation",
        "type": "Flask",
        "isReal": true,
        "layer": "GENERAL"
      },
      "sourceObj": {
        "id": "YWdlbnQ6OmdhdGV3YXk=.1",
        "name": "agent::gateway",
        "type": "spring-webflux",
        "isReal": true,
        "layer": "GENERAL"
      }
    },
    {
      "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
      "source": "YWdlbnQ6OmdhdGV3YXk=.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OnNvbmdz.1",
      "value": 1,
      "targetObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      },
      "sourceObj": {
        "id": "YWdlbnQ6OmdhdGV3YXk=.1",
        "name": "agent::gateway",
        "type": "spring-webflux",
        "isReal": true,
        "layer": "GENERAL"
      }
    },
    {
      "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
      "source": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OnNvbmdz.1",
      "value": 1,
      "sourceObj": {
        "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
        "name": "agent::recommendation",
        "type": "Flask",
        "isReal": true,
        "layer": "GENERAL"
      },
      "targetObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      }
    },
    {
      "id": "YWdlbnQ6OnNvbmdz.1-MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
      "source": "YWdlbnQ6OnNvbmdz.1",
      "detectPoints": [
        "CLIENT"
      ],
      "target": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
      "value": 1,
      "targetObj": {
        "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
        "name": "10.108.14.233:61616",
        "type": "ActiveMQ",
        "isReal": false
      },
      "sourceObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      }
    },
    {
      "id": "YWdlbnQ6OnNvbmdz.1-bG9jYWxob3N0Oi0x.0",
      "source": "YWdlbnQ6OnNvbmdz.1",
      "detectPoints": [
        "CLIENT"
      ],
      "target": "bG9jYWxob3N0Oi0x.0",
      "value": 1,
      "sourceObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      },
      "targetObj": {
        "id": "bG9jYWxob3N0Oi0x.0",
        "name": "localhost:-1",
        "type": "H2",
        "isReal": false
      }
    },
    {
      "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmZyb250ZW5k.1",
      "source": "YWdlbnQ6OnVp.1",
      "detectPoints": [
        "CLIENT",
        "SERVER"
      ],
      "target": "YWdlbnQ6OmZyb250ZW5k.1",
      "value": 1,
      "targetObj": {
        "id": "YWdlbnQ6OmZyb250ZW5k.1",
        "name": "agent::frontend",
        "type": "APISIX",
        "isReal": true
      },
      "sourceObj": {
        "id": "YWdlbnQ6OnVp.1",
        "name": "agent::ui",
        "type": null,
        "isReal": true
      }
    },
    {
      "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0-YWdlbnQ6OnNvbmdz.1",
      "source": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
      "detectPoints": [
        "SERVER"
      ],
      "target": "YWdlbnQ6OnNvbmdz.1",
      "value": 1,
      "sourceObj": {
        "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
        "name": "10.108.14.233:61616",
        "type": "ActiveMQ",
        "isReal": false
      },
      "targetObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      }
    },
    {
      "id": "VXNlcg==.0-YWdlbnQ6OnNvbmdz.1",
      "source": "VXNlcg==.0",
      "detectPoints": [
        "SERVER"
      ],
      "target": "YWdlbnQ6OnNvbmdz.1",
      "value": 1,
      "sourceObj": {
        "id": "VXNlcg==.0",
        "name": "User",
        "type": "USER",
        "isReal": false
      },
      "targetObj": {
        "id": "YWdlbnQ6OnNvbmdz.1",
        "name": "agent::songs",
        "type": "activemq-consumer",
        "isReal": true
      }
    }
  ],
  "nodes": [
    {
      "id": "VXNlcg==.0",
      "name": "User",
      "type": "USER",
      "isReal": false,
      "layer": null
    },
    {
      "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
      "name": "agent::recommendation",
      "type": "Flask",
      "isReal": true,
      "layer": "GENERAL"
    },
    {
      "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
      "name": "10.108.14.233:61616",
      "type": "ActiveMQ",
      "isReal": false,
      "layer": null
    },
    {
      "id": "YWdlbnQ6OnNvbmdz.1",
      "name": "agent::songs",
      "type": "Tomcat",
      "isReal": true,
      "layer": "GENERAL"
    },
    {
      "id": "YWdlbnQ6OmdhdGV3YXk=.1",
      "name": "agent::gateway",
      "type": "spring-webflux",
      "isReal": true,
      "layer": "GENERAL"
    },
    {
      "id": "bG9jYWxob3N0Oi0x.0",
      "name": "localhost:-1",
      "type": "H2",
      "isReal": false,
      "layer": null
    },
    {
      "id": "YWdlbnQ6OmFwcA==.1",
      "name": "agent::app",
      "type": "Express",
      "isReal": true,
      "layer": "GENERAL"
    },
    {
      "id": "YWdlbnQ6OmZyb250ZW5k.1",
      "name": "agent::frontend",
      "type": "APISIX",
      "isReal": true,
      "layer": "GENERAL"
    },
    {
      "id": "YWdlbnQ6OnVp.1",
      "name": "agent::ui",
      "type": null,
      "isReal": true,
      "layer": null
    }
  ],
  "node": null,
  "call": null,
  "nodeMetricValue": {
    "service_cpm": {
      "values": [
        {
          "id": "VXNlcg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 5
        },
        {
          "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1",
          "value": 15
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 11
        },
        {
          "id": "bG9jYWxob3N0Oi0x.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OmFwcA==.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OnVp.1",
          "value": 0
        }
      ]
    },
    "service_sla": {
      "values": [
        {
          "id": "VXNlcg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 10000
        },
        {
          "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1",
          "value": 10000
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 10000
        },
        {
          "id": "bG9jYWxob3N0Oi0x.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OmFwcA==.1",
          "value": 4985
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1",
          "value": 10000
        },
        {
          "id": "YWdlbnQ6OnVp.1",
          "value": 0
        }
      ]
    },
    "service_resp_time": {
      "values": [
        {
          "id": "VXNlcg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 27
        },
        {
          "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1",
          "value": 6
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 32
        },
        {
          "id": "bG9jYWxob3N0Oi0x.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OmFwcA==.1",
          "value": 52
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1",
          "value": 58
        },
        {
          "id": "YWdlbnQ6OnVp.1",
          "value": 0
        }
      ]
    }
  },
  "linkServerMetrics": {
    "service_relation_server_resp_time": {
      "values": [
        {
          "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 32
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1-YWdlbnQ6OmFwcA==.1",
          "value": 52
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 27
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
          "value": 10
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
          "value": 9
        },
        {
          "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmZyb250ZW5k.1",
          "value": 58
        },
        {
          "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0-YWdlbnQ6OnNvbmdz.1",
          "value": 0
        },
        {
          "id": "VXNlcg==.0-YWdlbnQ6OnNvbmdz.1",
          "value": 1
        }
      ]
    },
    "service_relation_server_cpm": {
      "values": [
        {
          "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1-YWdlbnQ6OmFwcA==.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmZyb250ZW5k.1",
          "value": 11
        },
        {
          "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0-YWdlbnQ6OnNvbmdz.1",
          "value": 6
        },
        {
          "id": "VXNlcg==.0-YWdlbnQ6OnNvbmdz.1",
          "value": 2
        }
      ]
    }
  },
  "linkClientMetrics": {
    "service_relation_client_cpm": {
      "values": [
        {
          "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1-YWdlbnQ6OmFwcA==.1",
          "value": 11
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1-MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
          "value": 5
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1-bG9jYWxob3N0Oi0x.0",
          "value": 24
        },
        {
          "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmZyb250ZW5k.1",
          "value": 17
        }
      ]
    },
    "service_relation_client_resp_time": {
      "values": [
        {
          "id": "YWdlbnQ6OmFwcA==.1-YWdlbnQ6OmdhdGV3YXk=.1",
          "value": 51
        },
        {
          "id": "YWdlbnQ6OmZyb250ZW5k.1-YWdlbnQ6OmFwcA==.1",
          "value": 58
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
          "value": 34
        },
        {
          "id": "YWdlbnQ6OmdhdGV3YXk=.1-YWdlbnQ6OnNvbmdz.1",
          "value": 21
        },
        {
          "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1-YWdlbnQ6OnNvbmdz.1",
          "value": 24
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1-MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnNvbmdz.1-bG9jYWxob3N0Oi0x.0",
          "value": 0
        },
        {
          "id": "YWdlbnQ6OnVp.1-YWdlbnQ6OmZyb250ZW5k.1",
          "value": 53
        }
      ]
    }
  },

  getLegendMetrics() {
    return {
      "service_sla": {
        "values": [
          {
            "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
            "value": 10000
          },
          {
            "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
            "value": 0
          },
          {
            "id": "YWdlbnQ6OnNvbmdz.1",
            "value": 10000
          },
          {
            "id": "YWdlbnQ6OmdhdGV3YXk=.1",
            "value": 10000
          },
          {
            "id": "bG9jYWxob3N0Oi0x.0",
            "value": 0
          },
          {
            "id": "YWdlbnQ6OmFwcA==.1",
            "value": 4985
          },
          {
            "id": "YWdlbnQ6OmZyb250ZW5k.1",
            "value": 10000
          },
          {
            "id": "YWdlbnQ6OnVp.1",
            "value": 0
          }
        ]
      },
      "service_cpm": {
        "values": [
          {
            "id": "YWdlbnQ6OnJlY29tbWVuZGF0aW9u.1",
            "value": 5
          },
          {
            "id": "MTAuMTA4LjE0LjIzMzo2MTYxNg==.0",
            "value": 0
          },
          {
            "id": "YWdlbnQ6OnNvbmdz.1",
            "value": 15
          },
          {
            "id": "YWdlbnQ6OmdhdGV3YXk=.1",
            "value": 11
          },
          {
            "id": "bG9jYWxob3N0Oi0x.0",
            "value": 0
          },
          {
            "id": "YWdlbnQ6OmFwcA==.1",
            "value": 11
          },
          {
            "id": "YWdlbnQ6OmZyb250ZW5k.1",
            "value": 11
          },
          {
            "id": "YWdlbnQ6OnVp.1",
            "value": 0
          }
        ]
      }
    }
  }
}

export const EntityType = [
  { value: "Service", label: "Service", key: 1 },
  { value: "All", label: "All", key: 10 },
  { value: "Endpoint", label: "Endpoint", key: 3 },
  { value: "ServiceInstance", label: "Service Instance", key: 3 },
  { value: "ServiceRelation", label: "Service Relation", key: 2 },
  {
    value: "ServiceInstanceRelation",
    label: "Service Instance Relation",
    key: 4,
  },
  { value: "EndpointRelation", label: "Endpoint Relation", key: 4 },
  { value: "ProcessRelation", label: "Process Relation", key: 5 },
];

export const ListEntity: any = {
  InstanceList: EntityType[3].value,
  EndpointList: EntityType[2].value,
  ServiceList: EntityType[0].value,
};

export const DepthList = [1, 2, 3, 4, 5].map((item: number) => ({
  value: item,
  label: `${item}`,
}));
