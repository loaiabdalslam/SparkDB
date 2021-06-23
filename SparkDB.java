import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.FileReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;

public class SparkDB {
	public static HashMap<String, ArrayList<String>> Mapper = new HashMap<String, ArrayList<String>>();
	public static ArrayList<String> Headers = new ArrayList<String>();
	public static int num_header = 0;
	void readfromfile(String filename) {
		boolean headerisprocessed = false;
		try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
			String line;
			String[] header = null;
			while ((line = br.readLine()) != null) {
				if (!headerisprocessed) {
					header = line.split(",");
					for (int i = 0; i < header.length; i++) {
						Mapper.put(header[i], new ArrayList<String>());
						Headers.add(header[i]);
					}
					num_header = header.length;
					headerisprocessed = true;
				} else {
					String[] single_col = line.split(",");
					for (int x = 0; x < num_header; x++) {
						Mapper.get(header[x]).add(single_col[x]);
					}
				}
			}
			br.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	void readfromString(String data) {
		InputStream stream = new ByteArrayInputStream(data.getBytes(StandardCharsets.UTF_8));
		boolean headerisprocessed = false;
		try (BufferedReader br = new BufferedReader(new InputStreamReader(stream))) {
			String line;
			String[] header = null;
			while ((line = br.readLine()) != null) {
				if (!headerisprocessed) {
					header = line.split(",");
					for (int i = 0; i < header.length; i++) {
						Mapper.put(header[i], new ArrayList<String>());
						Headers.add(header[i]);
					}
					num_header = header.length;
					headerisprocessed = true;
				} else {
					String[] single_col = line.split(",");
					for (int x = 0; x < num_header; x++) {
						Mapper.get(header[x]).add(single_col[x]);
					}
				}
			}
			br.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.gc();
	}
	String get(String FromCol, String ColVal, String ColToFind) {
		return Mapper.get(ColToFind).get(Mapper.get(FromCol).indexOf(ColVal));
		
	}
	String getbyindex(int index) {
		String out = "";
		for(int i = 0;i<num_header;i++) {
		String temp = Headers.get(i);
		out += temp + ":" + Mapper.get(temp).get(index)+",";
		}
		return out.substring(0,out.length()-1);
	}
	void add(String[] in) {
		if(in.length == num_header) {
			for(int i = 0;i<num_header;i++) {
				Mapper.get(Headers.get(i)).add(in[i]);
			}
		}
	}
	void delete(String[] in) {
		if(in.length == num_header) { 
			for(int i = 0;i<num_header;i++) {
				Mapper.get(Headers.get(i)).remove(in[i]);
			}
		}
	}
}
