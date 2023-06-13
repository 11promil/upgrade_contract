module.exports = async function ({getNamedAccounts, deployments}) {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  await deploy('MycontractV2', {
    from: deployer,
    contract: 'MycontractV2',
    proxy: {
      execute: {
        onUpgrade: {
            methodName: 'version',
          },
      },
    },
    log: true,
  });
};
module.exports.tags = ['MycontractV2'];