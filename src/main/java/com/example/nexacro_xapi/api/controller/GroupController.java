package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.nexacro_xapi.api.entity.GroupEntity;
import com.nexacro.java.xapi.data.DataSet;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.api.service.GroupService;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.api.entity.employee.EmployeeEntity;
import com.example.nexacro_xapi.api.entity.response.ColumnEntity;
import com.example.nexacro_xapi.api.entity.response.Dataset;
import com.example.nexacro_xapi.api.entity.response.ResponseEntity;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("Group")
public class GroupController {

	@Autowired
	private GroupService groupService;

	@GetMapping("")
	public String getList(HttpServletRequest request, Model model) throws IOException, PlatformException {
		List<Map<String, String>> groups = new ArrayList<>();
		groups = groupService.getList(null);

		List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new GroupEntity());
		List<Dataset> datasets = new ArrayList<>();
		Dataset dataset = new Dataset();
		dataset.setColumns(columns);
		dataset.setRows(groups);
		dataset.setId("IDDataset");

		datasets.add(dataset);
		ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
		model.addAttribute("data", entity);

		return "nexacroView";
	}

	@PostMapping("/saveGroup")
	public String saveGroup(Model model, HttpServletRequest request, HttpSession session) {
		DataSet dataSet = NexacroConvert.getRequestData(request, "ds_group");
		int rs = 0;
		int nErrorCode = 0;
		String strErrorMsg = "";
		List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
		try {
			//String user = session.getAttribute("user").toString();
			String user = "nhan";

			if (requestBody.size() != 0) {
				rs = groupService.saveGroup(requestBody.get(0),user);
				strErrorMsg = "Tạo mới thành công !";
			}else {
				nErrorCode = 1;
				strErrorMsg = "Tạo mới không thành công !";
			}

			ResponseEntity entity = new ResponseEntity(0, "SUCCESS", rs);
			model.addAttribute("data", entity);
			/*PlatformData senddata = new PlatformData();
			VariableList varList = senddata.getVariableList();
			varList.add("ErrorCode", nErrorCode);
			varList.add("ErrorMsg", strErrorMsg);*/
			return "nexacroView";

		}catch (Exception e){
			throw e;
		}

	}

	@PostMapping("/deleteGroup")
	public String deleteGroup(Model model, HttpServletRequest request, HttpSession session) {
		DataSet dataSet = NexacroConvert.getRequestData(request, "ds_group");
		int rs = 0;
		List<Map<String, String>> requestBody = NexacroConvert.convertDatasetToListMap(dataSet);
		String user = session.getAttribute("user").toString();
		try {
			if (requestBody.size() != 0) {
				rs = groupService.deleteGroup(requestBody.get(0),user);
			}
			if (rs >0){
				List<Dataset> datasets = new ArrayList<>();
				Dataset dataset = new Dataset();
				dataset.setId("IDDataset");
				datasets.add(dataset);
				ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
				model.addAttribute("data", entity);
			}

			return "nexacroView";
		}catch (Exception e){
			throw e;
		}


	}

	/*@PostMapping("/create")
	public String create(HttpServletRequest request, Model model) throws IOException, PlatformException {
		Map<String, String> groupInfo = new HashMap<>();
		int nErrorCode = 0;
		String strErrorMsg = "START";
		groupInfo.put("title", NexacroConvert.getRequestVariable(request, "titleGroup"));
		boolean result = groupService.create(groupInfo);
		if (result) {
			strErrorMsg = "Tạo mới thành công !";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Tạo mới không thành công !";
		}
		PlatformData senddata = new PlatformData();
		VariableList varList = senddata.getVariableList();
		varList.add("ErrorCode", nErrorCode);
		varList.add("ErrorMsg", strErrorMsg);
		return "nexacroView";
	}*/

}
