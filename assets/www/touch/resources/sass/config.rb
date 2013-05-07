# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', 'themes')

# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")
environment  = :production
output_style = :compressed

# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, 'http://www.cnblogs.com/SenchaTouch/resources', 'themes')//这里，如果不修改默认会到http://ip/resources/下面找图片

# Compass configurations
sass_path    = dir
css_path     = File.join(dir, "..", "css")

environment  = :production
output_style = :compressed