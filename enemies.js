class EnemyGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      key: 'enemy',
      frame: 20,
      repeat: 19,
      active: false,
      visible: false,
      setXY: { x: -100, y: -100 },
    });
  }

  resetEnemies() {
    this.getChildren().forEach(enemy => {
      move(enemy, this.scene);
    });
  }
}

function move(enemy, scene) {
  enemy.setActive(true);
  enemy.setVisible(true);
  enemy.setX(Math.floor(Math.random() * scene.game.config.width));
  enemy.setY(0);
  const randomDirection = Math.random() < 0.5 ? -1 : 1;
  enemy.setVelocityX(Math.random() * 200 * randomDirection);
  enemy.setVelocityY(Math.random() * 200);
}

function enemyCheckOutOfBounds(enemyGroup, scene) {
  enemyGroup.getChildren().forEach(enemy => {
    if (enemy.y > scene.game.config.height || enemy.x < 0 || enemy.x > scene.game.config.width) {
      move(enemy, scene);
    }
  });
}
