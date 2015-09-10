{
    "WorkerThreads":8,
    "DefaultLustreReplication": 1,
    "DefaultOstCount": 16,
    "DefaultImageLocation": "index.docker.io",
    "DefaultImageFormat": "squashfs",
    "PullUpdateTimeout": 300,
    "ImageExpirationTimeout": "90:00:00:00",

    "Locations": {
        "index.docker.io": {
            "remotetype": "dockerv2",
            "authentication": "http"
        },
        "registry.services.nersc.gov": {
            "remotetype": "dockerv2",
            "sslcacert": "/path/to/cacert.pem",
            "authentication": "http"
        }
    },

    "Platforms": {
        "edison": {
            "mungeSocketPath": "/path/to/edison/munge.socket",
            "usergroupService": "ldap",
            "accesstype": "remote",
            "host": [
                "edison01-eth4.nersc.gov",
                "edison02-eth4.nersc.gov"
            ],
            "ssh": {
                "username": "shifter",
                "key": "/path/to/ssh/key",
                "imageDir": "/remote/path/for/images"
            },
            "ldap": {
                "userBase": "ou=People,ou=edison,ou=Host,o=ldapsvc,dc=nersc,dc=gov",
                "groupBase": "ou=PosixGroup,ou=edison,ou=Host,o=ldapsvc,dc=nersc,dc=gov"
            }
        },
        "cori": {
            "mungeSocketPath": "/path/to/cori/munge.socket",
            "accesstype": "local",
            "usergroupService": "local",
            "local": {
                "imageDir": "/local/path/for/cori/images"
            }
        }
    }
}
