window.BENCHMARK_DATA = {
  "lastUpdate": 1607040382928,
  "repoUrl": "https://github.com/BourgondAries/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "macocio@gmail.com",
            "name": "Kevin Robert Stravers",
            "username": "BourgondAries"
          },
          "committer": {
            "email": "macocio@gmail.com",
            "name": "Kevin Robert Stravers",
            "username": "BourgondAries"
          },
          "distinct": true,
          "id": "31560bfe91bf2c7c4895e5cc51c637e79cf6ef0f",
          "message": "Add unwind feature flag\n\nSpecifying the `unwind` feature flag removes the catch_unwind from\nthe task harness. This is especially useful for testing a program with\ndetached joinhandles.",
          "timestamp": "2020-12-04T00:41:50+01:00",
          "tree_id": "ce7e84b742d94a7c34475fb4123da62214f21e97",
          "url": "https://github.com/BourgondAries/tokio/commit/31560bfe91bf2c7c4895e5cc51c637e79cf6ef0f"
        },
        "date": 1607040282138,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 166537,
            "range": "± 23750",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 678525,
            "range": "± 75206",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5296873,
            "range": "± 625172",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 19116222,
            "range": "± 4218514",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "macocio@gmail.com",
            "name": "Kevin Robert Stravers",
            "username": "BourgondAries"
          },
          "committer": {
            "email": "macocio@gmail.com",
            "name": "Kevin Robert Stravers",
            "username": "BourgondAries"
          },
          "distinct": true,
          "id": "31560bfe91bf2c7c4895e5cc51c637e79cf6ef0f",
          "message": "Add unwind feature flag\n\nSpecifying the `unwind` feature flag removes the catch_unwind from\nthe task harness. This is especially useful for testing a program with\ndetached joinhandles.",
          "timestamp": "2020-12-04T00:41:50+01:00",
          "tree_id": "ce7e84b742d94a7c34475fb4123da62214f21e97",
          "url": "https://github.com/BourgondAries/tokio/commit/31560bfe91bf2c7c4895e5cc51c637e79cf6ef0f"
        },
        "date": 1607040381505,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6285092,
            "range": "± 1713328",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 5913072,
            "range": "± 1456724",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 5396730,
            "range": "± 1678873",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 565,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 566,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 547,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 33433,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 609,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 944916,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 680091,
            "range": "± 1274",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}