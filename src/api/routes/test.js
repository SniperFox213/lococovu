import express from "express";
const router = express.Router();

import compute from "../credentials/Compute";

router.get('/', async (req, res) => {
  // Create a new VM using the latest OS image of your choice.
  const zone = compute.zone('us-central1-c');

  // TODO(developer): choose a name for the VM
  // const vmName = 'vm-name';

  // Start the VM create task
  const [vm, operation] = await zone.createVM("test", {
    os: 'ubuntu',
    machineType: 'f1-micro',
    tags: {
      items: [
        "lococovu-node",
        "wordbomb"
      ]
    },
    metadata: {
      items: [
        {
          key: 'startup-script',
          value: `#! /bin/bash
            apt-get update

            # Let's now install Node Js
            apt-get install -y nodejs

            # And now let's install Java Runtime
            apt-get install -y default-jre
            `,
        },
      ],
    },
  });

  // Complete!
  console.log('Virtual machine created!');

  res.end(JSON.stringify({ ok: true }));
});

export default router;