window.BENCHMARK_DATA = {
  "lastUpdate": 1607210069830,
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
      },
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
          "id": "42dc30a5db7849889b1eff3567aafe91d1b719cb",
          "message": "Implement a test scheduler that propagates panics\n\nThis patch implements a new scheduler that does not capture unwinds. It\ninstead lets unwinds bubble up.\n\nThis is useful in test cases where we might be interested in detached\ntasks' panics. Not all applications are interested in letting tasks\nfail, so this scheduler makes the implementation of testing such\napplications or libraries much easier.",
          "timestamp": "2020-12-06T00:02:39+01:00",
          "tree_id": "460d324e82665b1683219d09b92667ab1db0b8cd",
          "url": "https://github.com/BourgondAries/tokio/commit/42dc30a5db7849889b1eff3567aafe91d1b719cb"
        },
        "date": 1607210061371,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 158787,
            "range": "± 20042",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 610923,
            "range": "± 80618",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4768875,
            "range": "± 1135193",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18402776,
            "range": "± 3406389",
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
      },
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
          "id": "42dc30a5db7849889b1eff3567aafe91d1b719cb",
          "message": "Implement a test scheduler that propagates panics\n\nThis patch implements a new scheduler that does not capture unwinds. It\ninstead lets unwinds bubble up.\n\nThis is useful in test cases where we might be interested in detached\ntasks' panics. Not all applications are interested in letting tasks\nfail, so this scheduler makes the implementation of testing such\napplications or libraries much easier.",
          "timestamp": "2020-12-06T00:02:39+01:00",
          "tree_id": "460d324e82665b1683219d09b92667ab1db0b8cd",
          "url": "https://github.com/BourgondAries/tokio/commit/42dc30a5db7849889b1eff3567aafe91d1b719cb"
        },
        "date": 1607210068452,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6952720,
            "range": "± 2256334",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6728020,
            "range": "± 1837219",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6312865,
            "range": "± 2118660",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 649,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 657,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 657,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 47504,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 928,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1142785,
            "range": "± 80526",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 823696,
            "range": "± 55677",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
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
        "date": 1607040499139,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 963,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 16494,
            "range": "± 5439",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 930,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 16963,
            "range": "± 7176",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 545,
            "range": "± 81",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
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
        "date": 1607040679740,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13834,
            "range": "± 2251",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 903,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 534,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13872,
            "range": "± 2426",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 908,
            "range": "± 5",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}