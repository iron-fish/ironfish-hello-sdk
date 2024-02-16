/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import { IronfishSdk, NodeUtils } from '@ironfish/sdk'

async function run() {
  const sdk = await IronfishSdk.init({})

  const node = await sdk.node()
  await NodeUtils.waitForOpen(node)
  await node.start()
  await node.waitForShutdown()
}

run().catch(console.error)
