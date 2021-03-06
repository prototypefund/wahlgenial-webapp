class GlossaryTermImageUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
  
  process :quality => 100

  version :thumb do
    # https://stackoverflow.com/questions/8570181/carrierwave-resizing-images-to-fixed-width
    process resize_to_fit: [620 , -1]
  end
end
