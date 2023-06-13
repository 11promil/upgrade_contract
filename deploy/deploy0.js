module.exports = async function ({getNamedAccounts, deployments}) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  await deploy('MyContractV1', {
    from: deployer,
    contract: 'MycontractV1',
    proxy: {
      execute: {
        init: {
          methodName: 'initialize',
          args: [[2,3,4]],
        },
      },
    },
    log: true,
  });
  };
module.exports.tags = ['MycontractV1'];